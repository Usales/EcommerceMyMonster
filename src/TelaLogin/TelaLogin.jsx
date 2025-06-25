import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Imagens/mydrugslogo.png'

function TelaLogin() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de validação e envio do formulário
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm slide-down-fade">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-4">
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

      {/* Conteúdo Login */}
      <main className="container mx-auto px-4 pt-[210px] pb-16">
        <div className="max-w-md mx-auto slide-down-fade">
          <div
            className="bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-white"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white/90">Login</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white rounded-none text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Seu email"
                  required
                />
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm sm:text-base font-medium text-white/80 mb-2">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white rounded-none text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Sua senha"
                  required
                />
              </div>

              <button
                className="w-full bg-transparent border border-white text-white px-4 py-2 sm:py-3 text-sm sm:text-base rounded-none transition-all duration-150 hover:bg-white/10"
                type="submit"
              >
                Entrar
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm sm:text-base text-white/60">
                Não tem uma conta?{' '}
                <Link to="/cadastrar" className="text-white hover:text-white/80 border-b border-white">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TelaLogin 