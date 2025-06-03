import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../Imagens/mydrugslogo.png'

//foto MDMA
import pensandomdma from '../Imagens/pensandomdma.png'
import mdmagenie from '../Imagens/mdmagenie.jpg'
import mdmavermelho from '../Imagens/mdmavermelho.jpg'
import mdmaroxo from '../Imagens/mdmaroxo.jpg'
import mdmadiabo from '../Imagens/mdmadiabo.png'
import mdmaverde from '../Imagens/mdmaverde.jpg'
import mdmapeach from '../Imagens/mdmapeach.jpg'
import mdmaazul from '../Imagens/mdmaazul.jpg'

function TelaShop() {
  const produtos = [
    {
      id: 1,
      nome: "Esctasy Amarela",
      descricao: "125MG MDMA - Sabor Limão",
      preco: "0.0025 BTC",
      imagem: pensandomdma,
      cor: "yellow"
    },
    {
      id: 2,
      nome: "Racha Cuca",
      descricao: "130MG MDMA - Sabor Mirtilo",
      preco: "0.0018 BTC",
      imagem: mdmagenie,
      cor: "blue"
    },
    {
      id: 3,
      nome: "Esctasy Vermelho",
      descricao: "100MG MDMA",
      preco: "0.0022 BTC",
      imagem: mdmavermelho,
      cor: "red"
    },
    {
      id: 4,
      nome: "Esctasy Roxa",
      descricao: "70MG MDMA",
      preco: "0.0030 BTC",
      imagem: mdmaroxo,
      cor: "purple"
    },
    {
      id: 5,
      nome: "Esctasy do Diabinho",
      descricao: "130MG MDMA - Sabor Framboesa",
      preco: "0.0028 BTC",
      imagem: mdmadiabo,
      cor: "pink"
    },
    {
      id: 6,
      nome: "Esctasy Verde",
      descricao: "60MG MDMA",
      preco: "0.0026 BTC",
      imagem: mdmaverde,
      cor: "green"
    },
    {
      id: 7,
      nome: "Esctasy Natural",
      descricao: "130MG MDMA - Sabor Maçã",
      preco: "0.0027 BTC",
      imagem: mdmapeach,
      cor: "orange"
    },
    {
      id: 8,
      nome: "Trevo de 4 folhas",
      descricao: "130MG MDMA - Sabor Algodão doce",
      preco: "0.0029 BTC",
      imagem: mdmaazul,
      cor: "blue"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
            {/* Links da Esquerda */}
            <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 mb-4 md:mb-0">
              {["Home", "Shop", "FAQ"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-150 border border-white px-2 sm:px-3 py-1"
                  >
                    {item}
                  </Link>
                </motion.div>
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
              <Link to="/">
                <img src={logo} alt="MyDrugs Logo" className="h-12 sm:h-16 md:h-20 lg:h-24" />
              </Link>
            </motion.div>

            {/* Links da Direita */}
            <nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {["Seguranca", "Login", "Cadastrar"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Link
                    to={item === "Seguranca" ? "/seguranca" : `/${item.toLowerCase()}`}
                    className="text-white hover:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-bold transition-all duration-150 border border-white px-2 sm:px-3 py-1"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Shop */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white/90"
        >
          Nossos Produtos
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden border border-white"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-white/90">{produto.nome}</h2>
                <p className="text-sm sm:text-base text-white/80 mb-4">{produto.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-bold text-white/90">{produto.preco}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-${produto.cor}-500 hover:bg-${produto.cor}-400 text-white px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition-all duration-150`}
                  >
                    Comprar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default TelaShop 