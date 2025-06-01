import { useState } from 'react'
import logo from '../Imagens/mydrugslogocontorno.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Importando as imagens das pílulas
import yellowPill from '../Imagens/yellowpill.png'
import stableGenius from '../Imagens/stablegenius.png'
import redPill from '../Imagens/redpill.png'
import purplePill from '../Imagens/purplepill.png'
import pinkpill from '../Imagens/pinkpill.png'
import greenPill from '../Imagens/greenpill.png'
import peachPill from '../Imagens/peachpill.png'

//foto MDMA
import pensandomdma from '../Imagens/pensandomdma.png'
import mdmagenie from '../Imagens/mdmagenie.jpg'
import mdmavermelho from '../Imagens/mdmavermelho.jpg'
import mdmaroxo from '../Imagens/mdmaroxo.jpg'
import mdmadiabo from '../Imagens/mdmadiabo.png'
import mdmaverde from '../Imagens/mdmaverde.jpg'
import mdmapeach from '../Imagens/mdmapeach.jpg'
import mdmaazul from '../Imagens/mdmaazul.jpg'

const SlideItem = ({ image, title, description, buttonColor, buttonText, price, bitcoinPrice }) => (
  <div className="relative h-[500px] md:h-[600px] lg:h-[800px]">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover bg-black" />
    <div className={`absolute inset-0 bg-gradient-to-r from-${buttonColor}-600/30 to-${buttonColor}-800/30`}>
      {/* Preço e Estrelas - Posicionado na lateral direita */}
      <div className="absolute top-8 md:top-12 lg:top-16 right-4 md:right-8 lg:right-16 text-white flex flex-col items-end z-10">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2">{bitcoinPrice}</span>
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </svg>
          ))}
        </div>
      </div>
      <div className="h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="text-white max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">{title}</h2>
          <p className="text-sm md:text-base lg:text-xl mb-4 md:mb-6 lg:mb-8">{description}</p>
          <span className={`text-xl md:text-2xl font-bold text-${buttonColor}-400 mb-2 md:mb-4 block`}>{price}</span>
          <button className={`bg-${buttonColor}-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-${buttonColor}-400 transition-colors mt-4 md:mt-6 lg:mt-8`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
)

function TelaInicial() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    swipe: true,
    touchMove: true,
    draggable: true,
    swipeToSlide: true,
  }

  const slides = [
    {
      image: yellowPill,
      title: "Esctasy Amarela",
      description: "JÁ SE PERGUNTOU POR QUE O ECSTASY SE PARECE COM DOCE, MAS NUNCA É SABORIZADO? PROVE O ECSTASY COM SABOR DE LIMÃO CÍTRICO EM SUA BOCA. CADA PÍLULA CONTÉM 125MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS. DISPONÍVEL POR TEMPO LIMITADO APENAS PARA NOSSOS MEMBROS PREMIUM",
      buttonColor: "yellow",
      buttonText: "Saiba Mais",
      price: "R$ 99,90",
      bitcoinPrice: "BTC 0.0017"
    },
    {
      image: stableGenius,
      title: "Racha Cuca",
      description: "UMA BÊNÇÃO COM SABOR DE MIRTILO, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS.",
      buttonColor: "blue",
      buttonText: "Explorar",
      price: "R$ 149,90",
      bitcoinPrice: "BTC 0.036"
    },
    {
      image: redPill,
      title: "Esctasy Vermelha",
      description: "VOCÊ QUER FESTEJAR A NOITE TODA E TAMBÉM NO DIA SEGUINTE? CONFIRA A PÍLULA VERMELHA, NOSSO PRODUTO MAIS VENDIDO E COM MELHOR AVALIAÇÃO. SOMOS OS ÚNICOS REVENDEDORES DESTA PÍLULA PREMIUM, ENTÃO NÃO PERCA ESTA OPORTUNIDADE. CONTÉM 100 MG DE MDMA POR PÍLULA.",
      buttonColor: "red",
      buttonText: "Descobrir",
      price: "R$ 199,90",
      bitcoinPrice: "BTC 0.0036"
    },
    {
      image: purplePill,
      title: "Esctasy Roxa",
      description: "A FLOR ROXA É NOSSA RECOMENDAÇÃO PRINCIPAL PARA UMA NOITE CHEIA DE FELICIDADE FOFINHA COM SUA DOSE OTIMIZADA PARA SEIS HORAS DE ÊXTASE PERFEITO. A EXPERIÊNCIA CONTÉM 70MG DE MDMA POR PÍLULA.",
      buttonColor: "purple",
      buttonText: "Experimentar",
      price: "R$ 179,90",
      bitcoinPrice: "BTC 0.0012"
    },
    {
      image: pinkpill,
      title: "Esctasy Diabinho",
      description: "CONHEÇA A MAIS NOVA EDIÇÃO DA NOSSA LINHA DE PÍLULAS EXCLUSIVAS DO NOSSO PARCEIRO GOODTIMES. DESFRUTE DE UMA BÊNÇÃO COM SABOR DE FRAMBOESA, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS. DISPONÍVEL A PARTIR DO PRÓXIMO MÊS",
      buttonColor: "pink",
      buttonText: "Conhecer",
      price: "R$ 189,90",
      bitcoinPrice: "BTC 0.0021"
    },
    {
      image: greenPill,
      title: "Esctasy Verde",
      description: "A PÍLULA VERDE É NOSSA RECOMENDAÇÃO PRINCIPAL PARA UMA NOITE CHEIA DE FELICIDADE FOFINHA, COM SUA DOSE OTIMIZADA PARA CERCA DE SEIS HORAS DE ÊXTASE PERFEITO. A EXPERIÊNCIA CONTÉM 60MG DE MDMA POR PÍLULA.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 169,90",
      bitcoinPrice: "BTC 0.0029"
    },
    {
      image: peachPill,
      title: "Esctasy Natural",
      description: "UMA BÊNÇÃO COM SABOR DE MAÇã, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 159,90",
      bitcoinPrice: "BTC 0.0041"
    }
  ]

  const products = [
    {
      image: pensandomdma,
      name: "Esctasy Amarela",
      description: "125MG MDMA - Sabor Limão",
      price: "R$ 99,90",
      buttonColor: "yellow",
      buttonText: "Comprar"
    },
    {
      image: mdmagenie,
      name: "Racha Cuca",
      description: "130MG MDMA - Sabor Mirtilo",
      price: "R$ 149,90",
      buttonColor: "blue",
      buttonText: "Comprar"
    },
    {
      image: mdmavermelho,
      name: "Esctasy Vermelho",
      description: "100MG MDMA",
      price: "R$ 199,90",
      buttonColor: "red",
      buttonText: "Comprar"
    },
    {
      image: mdmaroxo,
      name: "Esctasy Roxa",
      description: "70MG MDMA",
      price: "R$ 179,90",
      buttonColor: "purple",
      buttonText: "Comprar"
    },
    {
      image: mdmadiabo,
      name: "Esctasy do Diabinho",
      description: "130MG MDMA - Sabor Framboesa",
      price: "R$ 189,90",
      buttonColor: "pink",
      buttonText: "Comprar"
    },
    {
      image: mdmaverde,
      name: "Esctasy Verde",
      description: "60MG MDMA",
      price: "R$ 169,90",
      buttonColor: "green",
      buttonText: "Comprar"
    },
    {
      image: mdmapeach,
      name: "Esctasy Natural",
      description: "130MG MDMA - Sabor Maçã",
      price: "R$ 159,90",
      buttonColor: "orange",
      buttonText: "Comprar"
    },
    {
      image: mdmaazul,
      name: "Trevo de 4 folhas",
      description: "130MG MDMA - Sabor Algodão doce",
      price: "R$ 159,90",
      buttonColor: "orange",
      buttonText: "Comprar"
    }
  ]
  
  //cabecalho do Site
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">

      {/* Header/Navbar */}
      <header className="bg-black">
        <div className="flex flex-col items-center py-2 md:py-4">

          {/* Logo */}
          <div className="mb-2 md:mb-4">
            <img src={logo} alt="MyDrugs Logo" className="h-16 md:h-20 lg:h-24" />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 md:gap-6 lg:gap-10">
            <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-bold transition-all duration-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-bold transition-all duration-300">Produtos</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm md:text-base lg:text-lg font-bold transition-all duration-300">Carrinho</a>
          </nav>
        </div>
      </header>

      {/* Slider */}
      <div className="w-[95%] md:w-[90%] mx-auto max-w-none overflow-hidden">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <SlideItem key={index} {...slide} />
          ))}
        </Slider>
      </div>

      {/* Products Grid */}
      <main className="container py-6 md:py-8 lg:py-12 pt-16 md:pt-24 lg:pt-32">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-white">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products
            .filter(product => product.description.includes('MDMA'))
            .map((product, index) => (
              <div key={index} className="relative group">
                <div className="h-[300px] md:h-[350px] lg:h-[400px] bg-gray-900 rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center p-4">
                      <h3 className="text-lg md:text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-xs md:text-sm mb-2 md:mb-4">{product.description}</p>
                      <span className={`text-xl md:text-2xl font-bold text-${product.buttonColor}-400 mb-2 md:mb-4 block`}>{product.price}</span>
                      <button className={`bg-${product.buttonColor}-500 text-white px-4 py-1 md:px-6 md:py-2 rounded-lg font-bold text-sm md:text-base hover:bg-${product.buttonColor}-400 transition-colors`}>
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 md:py-6 lg:py-8 border-t border-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">MyDrugs</h3>
              <p className="text-sm md:text-base text-gray-400">Sua loja online de confiança</p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Links Úteis</h4>
              <ul className="space-y-1 md:space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Contato</h4>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
                <li>Email: contato@mydrugs.com</li>
                <li>Telefone: (11) 9999-9999</li>
                <li>Endereço: Rua Exemplo, 123</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TelaInicial 