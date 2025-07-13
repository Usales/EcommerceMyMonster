import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../Imagens/mydrugslogo.png'

function TelaFAQ() {
  const faqItems = [
    {
      pergunta: "Como faço para comprar?",
      resposta: "Basta criar uma conta, fazer login, escolher seus energéticos favoritos e finalizar a compra pelo site."
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos pagamentos em reais (R$) via cartão de crédito, débito e Pix."
    },
    {
      pergunta: "Quais sabores estão disponíveis?",
      resposta: "Temos uma linha completa Monster Ultra: Limão cítrico, Mirtilo, Frutos vermelhos, Framboesa azul, Rosá (frutos vermelhos/florais), Paradise (kiwi/lima/pepino) e Sunrise (laranja cítrica)."
    },
    {
      pergunta: "Qual a quantidade de cafeína por lata?",
      resposta: "Nossos energéticos variam entre 140mg e 155mg de cafeína por lata de 473ml. Veja a descrição de cada produto para detalhes."
    },
    {
      pergunta: "Como é feita a entrega?",
      resposta: "A entrega é feita pelos Correios ou transportadora, com rastreamento e prazo médio de 2 a 7 dias úteis para todo o Brasil."
    },
    {
      pergunta: "Os produtos são originais?",
      resposta: "Sim! Trabalhamos apenas com energéticos Monster originais, lacrados e dentro do prazo de validade."
    },
    {
      pergunta: "Posso consumir se pratico esportes?",
      resposta: "Sim, mas sempre consulte um profissional de saúde. Nossos energéticos são ideais para dar energia antes de treinos ou para manter o foco nos estudos."
    },
    {
      pergunta: "Qual a política de reembolso?",
      resposta: "Oferecemos reembolso em caso de problemas com a entrega ou qualidade do produto. Entre em contato com nosso suporte para mais informações."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm slide-down-fade">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4">
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
                <img src={logo} alt="MyMonster Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 logo-header" />
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

      {/* Conteúdo FAQ */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white/90"
        >
          Perguntas Frequentes
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-white"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white/90">{item.pergunta}</h2>
              <p className="text-sm sm:text-base text-white/80">{item.resposta}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/seguranca"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-150"
          >
            Ver Informações de Segurança
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

export default TelaFAQ 