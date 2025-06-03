import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../Imagens/mydrugslogo.png'

function TelaFAQ() {
  const faqItems = [
    {
      pergunta: "Como faço para comprar?",
      resposta: "Para realizar uma compra, você precisa criar uma conta, fazer login e escolher os produtos desejados. O pagamento é feito exclusivamente em Bitcoin."
    },
    {
      pergunta: "Quais são as formas de pagamento?",
      resposta: "Aceitamos apenas Bitcoin como forma de pagamento, garantindo total anonimato e segurança nas transações."
    },
    {
      pergunta: "Como é feita a entrega?",
      resposta: "Utilizamos um sistema de entrega discreto e seguro. O produto é enviado em embalagem neutra, sem identificação do conteúdo."
    },
    {
      pergunta: "É seguro comprar?",
      resposta: "Sim, utilizamos criptografia de ponta a ponta, pagamentos em Bitcoin e embalagens discretas para garantir sua segurança."
    },
    {
      pergunta: "Como rastrear meu pedido?",
      resposta: "Após a confirmação do pagamento, você receberá um código de rastreamento anônimo para acompanhar sua entrega."
    },
    {
      pergunta: "Qual a política de reembolso?",
      resposta: "Oferecemos reembolso em caso de problemas com a entrega ou qualidade do produto. Entre em contato com nosso suporte."
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