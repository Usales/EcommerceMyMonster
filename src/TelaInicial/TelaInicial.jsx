import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../Imagens/mydrugslogo.png'
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
  <div className="relative h-screen">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className={`absolute inset-0 bg-gradient-to-r from-${buttonColor}-600/30 to-${buttonColor}-800/30`}>
      {/* Preço e Estrelas - Posicionado na lateral direita */}
      <div className="absolute top-[60%] sm:top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 text-white flex flex-col items-end z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-2 sm:mb-4"
        >
          {bitcoinPrice}
        </motion.span>
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.svg 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 text-white"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
            </motion.svg>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          25% {
            transform: scale(1.2) translateY(-15px);
          }
          50% {
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
      <div className="h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="text-white max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm md:text-base lg:text-xl mb-4 md:mb-6 lg:mb-8"
          >
            {description}
          </motion.p>
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-xl md:text-2xl font-bold text-${buttonColor}-400 mb-2 md:mb-4 block`}
          >
            {price}
          </motion.span>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`bg-${buttonColor}-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-${buttonColor}-400 transition-colors mt-4 md:mt-6 lg:mt-8`}
          >
            {buttonText}
          </motion.button>
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
      bitcoinPrice: "BTC 0.0001656"
    },
    {
      image: stableGenius,
      title: "Racha Cuca",
      description: "UMA BÊNÇÃO COM SABOR DE MIRTILO, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS.",
      buttonColor: "blue",
      buttonText: "Explorar",
      price: "R$ 149,90",
      bitcoinPrice: "BTC 0.0002484"
    },
    {
      image: redPill,
      title: "Esctasy Vermelha",
      description: "VOCÊ QUER FESTEJAR A NOITE TODA E TAMBÉM NO DIA SEGUINTE? CONFIRA A PÍLULA VERMELHA, NOSSO PRODUTO MAIS VENDIDO E COM MELHOR AVALIAÇÃO. SOMOS OS ÚNICOS REVENDEDORES DESTA PÍLULA PREMIUM, ENTÃO NÃO PERCA ESTA OPORTUNIDADE. CONTÉM 100 MG DE MDMA POR PÍLULA.",
      buttonColor: "red",
      buttonText: "Descobrir",
      price: "R$ 199,90",
      bitcoinPrice: "BTC 0.0003313"
    },
    {
      image: purplePill,
      title: "Esctasy Roxa",
      description: "A FLOR ROXA É NOSSA RECOMENDAÇÃO PRINCIPAL PARA UMA NOITE CHEIA DE FELICIDADE FOFINHA COM SUA DOSE OTIMIZADA PARA SEIS HORAS DE ÊXTASE PERFEITO. A EXPERIÊNCIA CONTÉM 70MG DE MDMA POR PÍLULA.",
      buttonColor: "purple",
      buttonText: "Experimentar",
      price: "R$ 179,90",
      bitcoinPrice: "BTC 0.0002979"
    },
    {
      image: pinkpill,
      title: "Esctasy Diabinho",
      description: "CONHEÇA A MAIS NOVA EDIÇÃO DA NOSSA LINHA DE PÍLULAS EXCLUSIVAS DO NOSSO PARCEIRO GOODTIMES. DESFRUTE DE UMA BÊNÇÃO COM SABOR DE FRAMBOESA, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS. DISPONÍVEL A PARTIR DO PRÓXIMO MÊS",
      buttonColor: "pink",
      buttonText: "Conhecer",
      price: "R$ 189,90",
      bitcoinPrice: "BTC 0.0003146"
    },
    {
      image: greenPill,
      title: "Esctasy Verde",
      description: "A PÍLULA VERDE É NOSSA RECOMENDAÇÃO PRINCIPAL PARA UMA NOITE CHEIA DE FELICIDADE FOFINHA, COM SUA DOSE OTIMIZADA PARA CERCA DE SEIS HORAS DE ÊXTASE PERFEITO. A EXPERIÊNCIA CONTÉM 60MG DE MDMA POR PÍLULA.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 169,90",
      bitcoinPrice: "BTC 0.0002814"
    },
    {
      image: peachPill,
      title: "Esctasy Natural",
      description: "UMA BÊNÇÃO COM SABOR DE MAÇã, CADA PÍLULA CONTÉM 130MG DE MDMA E ALGUNS AROMATIZANTES NATURAIS.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 159,90",
      bitcoinPrice: "BTC 0.0002649"
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
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
            {/* Links da Esquerda */}
            <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 mb-4 md:mb-0">
              {["Home", "Shop", "FAQ"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-150 border border-white px-2 sm:px-3 py-1"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Logo Central */}
            <motion.div 
              className="flex-shrink-0 mb-4 md:mb-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={logo} alt="MyDrugs Logo" className="h-12 sm:h-16 md:h-20 lg:h-24" />
            </motion.div>

            {/* Links da Direita */}
            <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {["Segurança", "Login", "Cadastrar"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-150 border border-white px-2 sm:px-3 py-1"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Slider */}
      <div className="w-full h-[calc(100vh-4rem)] sm:h-screen">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <SlideItem key={index} {...slide} />
          ))}
        </Slider>
      </div>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-6 md:py-8 lg:py-12 pt-16 md:pt-24 lg:pt-32 bg-black">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-white"
        >
          Produtos em Destaque
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-10">
          {products
            .filter(product => product.description.includes('MDMA'))
            .map((product, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-900 rounded-lg overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center p-2 sm:p-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm mb-1 sm:mb-2 md:mb-4">
                        {product.description}
                      </p>
                      <span className={`text-lg sm:text-xl md:text-2xl font-bold text-${product.buttonColor}-400 mb-1 sm:mb-2 md:mb-4 block`}>
                        {product.price}
                      </span>
                      <button 
                        className={`bg-${product.buttonColor}-500 text-white px-3 sm:px-4 py-1 md:px-6 md:py-2 rounded-lg font-bold text-xs sm:text-sm md:text-base hover:bg-${product.buttonColor}-400 transition-colors`}
                      >
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 md:py-6 lg:py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-4">MyDrugs</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Sua loja online de confiança</p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Links Úteis</h4>
              <ul className="space-y-1 md:space-y-2">
                <li><a href="#" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Contato</h4>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
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