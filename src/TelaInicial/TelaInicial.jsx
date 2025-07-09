import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../Imagens/mydrugslogo.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link, useNavigate } from 'react-router-dom'

// Importando as imagens
import yellowbackground from '../Imagens/yellowpill.png'
import darkpinkbackground from '../Imagens/stablegenius.png'
import redbackground from '../Imagens/redpill.jpg'
import purpebackground from '../Imagens/purplepill.png'
import pinkbackground from '../Imagens/pinkpill.png'
import greenbackground from '../Imagens/greenpill.png'
import peachbackground from '../Imagens/peachpill.png'

//foto Monsters
import pensandomdma from '../Imagens/pensandomdma.png'
import mdmagenie from '../Imagens/mdmagenie.jpg'
import mdmavermelho from '../Imagens/mdmavermelho.jpg'
import mdmaroxo from '../Imagens/mdmaroxo.jpg'
import mdmadiabo from '../Imagens/mdmadiabo.png'
import mdmaverde from '../Imagens/mdmaverde.jpg'
import mdmapeach from '../Imagens/mdmapeach.jpg'
import mdmaazul from '../Imagens/mdmaazul.jpg'

// Imagens para a imagem central
import kindpng1 from '../Imagens/kindpng_1759252.png'
import kindpng2 from '../Imagens/kindpng_2903045.png'
import kindpng3 from '../Imagens/kindpng_6466813.png'
import kindpng4 from '../Imagens/kindpng_1019503.png'
import kindpng5 from '../Imagens/kindpng_rosa.png'
import kindpng6 from '../Imagens/kindpng_4795949.png'
import kindpng7 from '../Imagens/kindpng_7847141.png'

const centralImages = [
  kindpng1,
  kindpng2,
  kindpng3,
  kindpng4,
  kindpng5,
  kindpng6,
  kindpng7
]

const SlideItem = ({ image, title, description, buttonColor, buttonText, price, bitcoinPrice, onButtonClick }) => (
  <div className="relative h-screen">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className={`absolute inset-0 bg-gradient-to-r from-${buttonColor}-600/30 to-${buttonColor}-800/30`}>
      {/* Preço e Estrelas - Posicionado na lateral direita */}
      <div className="absolute top-[60%] sm:top-1/2 -translate-y-1/2 right-4 md:right-8 lg:right-16 text-white flex flex-col items-end z-10">
        <span 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-2 sm:mb-4 break-words max-w-[620px] text-right"
        >
          {bitcoinPrice}
        </span>
        {/* Removido bloco das estrelas */}
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
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          >
            {title}
          </h2>
          <p 
            className="text-sm md:text-base lg:text-xl mb-4 md:mb-6 lg:mb-8"
          >
            {description}
          </p>
          <span 
            className={`text-xl md:text-2xl font-bold text-${buttonColor}-400 mb-2 md:mb-4 block`}
          >
            {price}
          </span>
          <button 
            className={`bg-${buttonColor}-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-${buttonColor}-400 transition-colors mt-4 md:mt-6 lg:mt-8`}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
)

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300, // entra do lado oposto ao movimento
    opacity: 0,
    position: 'absolute'
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'absolute'
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300, // sai para o lado do movimento
    opacity: 0,
    position: 'absolute'
  })
}

function TelaInicial() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)
  const [direction, setDirection] = useState(1)
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
    beforeChange: (oldIndex, newIndex) => {
      setDirection(newIndex > oldIndex || (oldIndex === centralImages.length - 1 && newIndex === 0) ? 1 : -1)
      setPrevSlide(currentSlide)
      setCurrentSlide(newIndex)
    },
  }

  const slides = [
    {
      image: yellowbackground,
      title: "🍋Ultra Citron",
      description: "Monster Ultra Citron é uma bebida energética sem açúcar, com baixo teor calórico, enfatizada por um sabor cítrico fresco e vibrante – uma abordagem única dentro da linha Monster Ultra, destacada pela sua lata amarela texturada.",
      buttonColor: "yellow",
      buttonText: "Saiba Mais",
      price: "R$ 34,90",
      bitcoinPrice: "Explosão de energia!"
    },
    {
      image: darkpinkbackground,
      title: "🔋 Monster Rehab",
      description: "Monster Rehab é uma bebida nutritiva e refrescante, concebida para quem procura hidratação e revitalização de forma suave, sem gás. Ideal para recuperar energias após o desporto, uma noite difícil ou simplesmente para um boost ao longo do dia.",
      buttonColor: "blue",
      buttonText: "Explorar",
      price: "R$ 34,90",
      bitcoinPrice: "Recupere sua vibe!"
    },
    {
      image: redbackground,
      title: "🐉Ultra Red",
      description: "Monster Ultra Red é um energético da linha Ultra Zero‑Sugar da Monster, com um sabor a mistura de frutos vermelhos (fruit punch), leve, crocante e refrescante. Com apenas 10 calorias por lata (500 ml) e zero açúcar, oferece o máximo sabor sem comprometer a dieta .",
      buttonColor: "red",
      buttonText: "Descobrir",
      price: "R$ 34,90",
      bitcoinPrice: "Energia para virar a noite!"
    },
    {
      image: purpebackground,
      title: "🌊 Ultra Blue",
      description: "Monster Ultra Blue é um energético da linha Zero Sugar da Monster, com sabor a framboesa azul gelada (e notas cítricas), leve, refrescante e sem açúcar. Ideal para quem procura energia intensa sem calorias.",
      buttonColor: "purple",
      buttonText: "Experimentar",
      price: "R$ 34,90",
      bitcoinPrice: "Sinta a vibe gelada!"
    },
    {
      image: pinkbackground,
      title: "🌸 Ultra Rosá",
      description: "Monster Ultra Rosá é um energético da linha Zero Sugar da Monster, com um sabor equilibrado entre frutos vermelhos e notas florais. Zero açúcar e cerca de 10 kcal por lata (500 ml), oferece energia leve e sofisticada – com 150 mg de cafeína por dose.",
      buttonColor: "pink",
      buttonText: "Conhecer",
      price: "R$ 34,90",
      bitcoinPrice: "Energia com estilo!"
    },
    {
      image: greenbackground,
      title: "🌴 Ultra Paradise",
      description: "Monster Ultra Paradise é um energético da linha Ultra Zero Sugar, com sabor a kiwi, lima e um toque sutil de pepino, evocando um verdadeiro ambiente paradisíaco. Tem zero açúcar e apenas 10 kcal por lata de 500 ml, sendo uma escolha energética sofisticada e tropical.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 34,90",
      bitcoinPrice: "Sabor do paraíso!"
    },
    {
      image: peachbackground,
      title: "🌅 Ultra Sunrise",
      description: "Monster Ultra Sunrise pertence à série Ultra Zero Sugar da Monster, com sabor a laranja cítrica (próxima do tangerino ou sumar lemon), refrescante, leve e sem açúcar. Ideal para consumo a qualquer hora, especialmente de manhã — mantenha-se energizado com estilo e elegância.",
      buttonColor: "green",
      buttonText: "Explorar",
      price: "R$ 34,90",
      bitcoinPrice: "Acorde com disposição!"
    }
  ]

  const products = [
    {
      image: pensandomdma,
      name: "🍋Ultra Citron",
      description: "Cafeína: ~140mg | Sabor: Limão cítrico vibrante.",
      price: "R$ 34,90",
      buttonColor: "yellow",
      buttonText: "Comprar"
    },
    {
      image: mdmagenie,
      name: "🔋 Monster Rehab",
      description: "Cafeína: ~140mg | Sabor: Mirtilo.",
      price: "R$ 34,90",
      buttonColor: "blue",
      buttonText: "Comprar"
    },
    {
      image: mdmavermelho,
      name: "🐉Ultra Red",
      description: "Cafeína: 140mg | Sabor: Frutos vermelhos (fruit punch).",
      price: "R$ 34,90",
      buttonColor: "red",
      buttonText: "Comprar"
    },
    {
      image: mdmaroxo,
      name: "🌊 Ultra Blue",
      description: "Cafeína: 140mg | Sabor: Framboesa azul com toques cítricos.",
      price: "R$ 34,90",
      buttonColor: "purple",
      buttonText: "Comprar"
    },
    {
      image: mdmadiabo,
      name: "🌸 Ultra Rosá",
      description: "Cafeína: 150mg | Sabor: Frutos vermelhos com notas florais / limonada rosa.",
      price: "R$ 34,90",
      buttonColor: "pink",
      buttonText: "Comprar"
    },
    {
      image: mdmaverde,
      name: "🌴 Ultra Paradise",
      description: "Cafeína: 140mg | Sabor: Kiwi, lima e toque de pepino — sabor tropical.",
      price: "R$ 34,90",
      buttonColor: "green",
      buttonText: "Comprar"
    },
    {
      image: mdmapeach,
      name: "🌅 Ultra Sunrise",
      description: "Cafeína: 155mg | Sabor: Laranja cítrica (tipo tangerina/toranja).",
      price: "R$ 34,90",
      buttonColor: "orange",
      buttonText: "Comprar"
    }
  ]
  
  //cabecalho do Site
  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentSlide}
          src={centralImages[currentSlide % centralImages.length]}
          alt="Energético central"
          className="pointer-events-none select-none absolute left-1/2 top-48 z-20"
          style={{
            transform: 'translateX(-60%)',
            maxHeight: '60vh',
            maxWidth: '30vw',
            opacity: 1,
            filter: 'drop-shadow(0 4px 32px #000a)'
          }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Header/Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 slide-down-fade">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6">
            {/* Links da Esquerda */}
            <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 mb-4 md:mb-0">
              {["Home", "Shop", "FAQ"].map((item) => (
                <div key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold border border-white px-2 sm:px-3 py-1"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Logo Central */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <Link to="/">
                <img src={logo} alt="Monster Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 logo-header" />
              </Link>
            </div>

            {/* Links da Direita */}
            <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {["Seguranca", "Login", "Cadastrar"].map((item) => (
                <div key={item}>
                  <Link
                    to={item === "Seguranca" ? "/seguranca" : `/${item.toLowerCase()}`}
                    className="transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold border border-white px-2 sm:px-3 py-1"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Slider */}
      <div className="w-full h-[calc(100vh-4rem)] sm:h-screen">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <SlideItem key={index} {...slide} onButtonClick={() => navigate('/shop')} />
          ))}
        </Slider>
      </div>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-6 md:py-8 lg:py-12 pt-16 md:pt-24 lg:pt-32 bg-black">
        <h2 
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-white"
        >
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-10">
          {products.map((product, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
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
                        onClick={() => navigate('/shop')}
                      >
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-4">MyMonster</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Projeto desenvolvido com o objetivo de praticar minhas habilidades de programação. </p>
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Links Úteis</h4>
              <ul className="space-y-1 md:space-y-2">
              <li><a href="https://salesportifolio.netlify.app/" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Portifolio</a></li>
              <li><a href="https://github.com/Usales" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Github</a></li>
                <li><a href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" className="text-xs sm:text-sm md:text-base text-gray-400 hover:text-white">Linkedin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 md:mb-4">Contato</h4>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
                <li>Email: GabrielHenriqueslsales1@gmail.com</li>
                <li>Whatsapp: (62) 99522-7774</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TelaInicial 