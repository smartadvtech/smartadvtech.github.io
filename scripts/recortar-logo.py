#!/usr/bin/env python3
"""
Gera, a partir do logo original (design/logo-original.jpeg, o único arquivo que existe do logo), os recortes usados no
site, o favicon e a imagem de compartilhamento. O desenho não muda: só é recortado.

- src/assets/logo/*.png: o símbolo, o logo sem o tagline e o logo completo, com o navy do fundo transparente. Cada
  pixel vira a cor F com o alfa a tal que a·F + (1-a)·navy é o pixel original: sobre o navy da página (#021033), o
  desenho e a sombra dele ficam iguais ao JPEG, sem o ruído de compressão do fundo, que revelaria o retângulo do
  recorte. Só servem sobre esse navy.
- public/: os favicons e o og.png, com o fundo navy opaco.

Uso: python3 scripts/recortar-logo.py (precisa do Pillow). Quando houver o logo em vetor, ele substitui este script.
"""
from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGINAL = RAIZ / "design" / "logo-original.jpeg"
NAVY = (2, 16, 51)
PISO_CLARO = 0.05  # ~12 níveis acima do navy: ruído do JPEG no fundo
PISO_ESCURO = 0.25  # ~13 níveis de azul abaixo do navy: ruído; a sombra do desenho chega a azul 0

# No original (640 x 640): o símbolo em x 179-466, y 172-336; o logotipo em x 63-579, y 366-412; o tagline em
# y 438-474. Os recortes deixam 10 px de margem.
RECORTES = {
    "simbolo.png": (169, 162, 477, 347),
    "logo-sem-tagline.png": (53, 162, 590, 422),
    "logo-completo.png": (53, 162, 590, 485),
}


def main():
    logo = Image.open(ORIGINAL).convert("RGB")
    for nome, caixa in RECORTES.items():
        sem_o_navy(logo.crop(caixa)).save(RAIZ / "src" / "assets" / "logo" / nome)

    simbolo = logo.crop(RECORTES["simbolo.png"])
    publico = RAIZ / "public"
    for lado, nome in [(32, "favicon-32.png"), (180, "apple-touch-icon.png"), (192, "icon-192.png"),
                       (512, "icon-512.png")]:
        no_quadrado(simbolo, lado, 0.12).save(publico / nome)
    no_quadrado(simbolo, 48, 0.08).save(publico / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    imagem_de_compartilhamento(logo.crop(RECORTES["logo-completo.png"])).save(publico / "og.png", optimize=True)


def sem_o_navy(recorte):
    saida = []
    for pixel in recorte.getdata():
        alfa = _alfa(pixel)
        if alfa <= 0:
            saida.append((*NAVY, 0))
            continue
        cor = tuple(max(0, min(255, round(n + (c - n) / alfa))) for c, n in zip(pixel, NAVY))
        saida.append((*cor, round(255 * alfa)))
    imagem = Image.new("RGBA", recorte.size)
    imagem.putdata(saida)
    return imagem


def _alfa(pixel):
    claro = max(max(0, c - n) / (255 - n) for c, n in zip(pixel, NAVY))
    # Mais escuro que o navy só se mede no azul: no vermelho e no verde o navy já está perto de 0
    escuro = max(0, NAVY[2] - pixel[2]) / NAVY[2]
    if claro - PISO_CLARO >= escuro - PISO_ESCURO:
        return max(0.0, (claro - PISO_CLARO) / (1 - PISO_CLARO))
    return max(0.0, (escuro - PISO_ESCURO) / (1 - PISO_ESCURO))


def no_quadrado(imagem, lado, margem):
    """A imagem centralizada num quadrado navy, com a margem em fração do lado."""
    util = int(lado * (1 - 2 * margem))
    escala = util / max(imagem.size)
    menor = imagem.resize((round(imagem.width * escala), round(imagem.height * escala)), Image.LANCZOS)
    quadro = Image.new("RGB", (lado, lado), NAVY)
    quadro.paste(menor, ((lado - menor.width) // 2, (lado - menor.height) // 2))
    return quadro


def imagem_de_compartilhamento(logo_completo):
    og = Image.new("RGB", (1200, 630), NAVY)
    escala = 470 / logo_completo.height
    grande = logo_completo.resize((round(logo_completo.width * escala), 470), Image.LANCZOS)
    og.paste(grande, ((1200 - grande.width) // 2, (630 - grande.height) // 2))
    return og


if __name__ == "__main__":
    main()
