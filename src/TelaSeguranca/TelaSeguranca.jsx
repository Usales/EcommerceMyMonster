import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../Imagens/mydrugslogo.png'

function TelaSeguranca() {
  const segurancaItems = [
    {
      titulo: "Criptografia de Ponta a Ponta",
      conteudo: "Todas as comunicações são criptografadas de ponta a ponta, garantindo que apenas você e o destinatário possam ler as mensagens."
    },
    {
      titulo: "Pagamento em Bitcoin",
      conteudo: "Utilizamos exclusivamente Bitcoin como forma de pagamento, garantindo total anonimato nas transações."
    },
    {
      titulo: "Entrega Discreta",
      conteudo: "Nossas embalagens são neutras e discretas, sem qualquer identificação do conteúdo."
    },
    {
      titulo: "Proteção de Dados",
      conteudo: "Seus dados pessoais são protegidos e nunca compartilhados com terceiros."
    },
    {
      titulo: "Comunicação Segura",
      conteudo: "Utilizamos canais de comunicação seguros e criptografados para todas as interações."
    },
    {
      titulo: "Anonimato Garantido",
      conteudo: "Sua identidade é protegida em todas as etapas do processo, desde o cadastro até a entrega."
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
                <img src={logo} alt="MyDrugs Logo" className="h-12 sm:h-16 md:h-20 lg:h-24 logo-header" />
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

      {/* Conteúdo Segurança */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white/90"
        >
          Segurança e Privacidade
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {segurancaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-white"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white/90">{item.titulo}</h2>
              <p className="text-sm sm:text-base text-white/80">{item.conteudo}</p>
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
            to="/faq"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-150"
          >
            Ver Perguntas Frequentes
          </Link>
        </motion.div>
      </main>
    </div>
  )
}

export default TelaSeguranca 