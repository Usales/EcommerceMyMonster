import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
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
  const navigate = useNavigate()
  const [filtro, setFiltro] = useState('todos')
  const [busca, setBusca] = useState('')
  const [carrinho, setCarrinho] = useState([])
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [quantidade, setQuantidade] = useState(1)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState(false) // Temporário, depois virá do backend

  const produtos = [
    {
      id: 1,
      nome: "🍋Ultra Citron",
      descricao: "Cafeína: ~140mg | Sabor: Limão cítrico vibrante.",
      preco: "R$ 34,90",
      imagem: pensandomdma,
      cor: "yellow"
    },
    {
      id: 2,
      nome: "🔋 Monster Rehab",
      descricao: "Cafeína: ~140mg | Sabor: Mirtilo.",
      preco: "R$ 34,90",
      imagem: mdmagenie,
      cor: "blue"
    },
    {
      id: 3,
      nome: "🐉Ultra Red",
      descricao: "Cafeína: 140mg | Sabor: Frutos vermelhos (fruit punch).",
      preco: "R$ 34,90",
      imagem: mdmavermelho,
      cor: "red"
    },
    {
      id: 4,
      nome: "🌊 Ultra Blue",
      descricao: "Cafeína: 140mg | Sabor: Framboesa azul com toques cítricos.",
      preco: "R$ 34,90",
      imagem: mdmaroxo,
      cor: "purple"
    },
    {
      id: 5,
      nome: "🌸 Ultra Rosá",
      descricao: "Cafeína: 150mg | Sabor: Frutos vermelhos com notas florais / limonada rosa.",
      preco: "R$ 34,90",
      imagem: mdmadiabo,
      cor: "pink"
    },
    {
      id: 6,
      nome: "🌴 Ultra Paradise",
      descricao: "Cafeína: 140mg | Sabor: Kiwi, lima e toque de pepino — sabor tropical.",
      preco: "R$ 34,90",
      imagem: mdmaverde,
      cor: "green"
    },
    {
      id: 7,
      nome: "🌅 Ultra Sunrise",
      descricao: "Cafeína: 155mg | Sabor: Laranja cítrica (tipo tangerina/toranja).",
      preco: "R$ 34,90",
      imagem: mdmapeach,
      cor: "orange"
    }
  ]

  const produtosFiltrados = produtos.filter(produto => {
    const matchFiltro = filtro === 'todos' || produto.cor === filtro
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      produto.descricao.toLowerCase().includes(busca.toLowerCase())
    return matchFiltro && matchBusca
  })

  const abrirModalQuantidade = (produto) => {
    setProdutoSelecionado(produto)
    setQuantidade(1)
  }

  const fecharModal = () => {
    setProdutoSelecionado(null)
    setQuantidade(1)
  }

  const ajustarQuantidade = (valor) => {
    const novaQuantidade = quantidade + valor
    if (novaQuantidade >= 1 && novaQuantidade <= 10) {
      setQuantidade(novaQuantidade)
    }
  }

  const calcularPrecoTotal = () => {
    if (!produtoSelecionado) return "R$ 0,00"
    // Extrai apenas o número do preço em reais
    const precoBase = parseFloat(produtoSelecionado.preco.replace('R$', '').replace(',', '.').trim())
    const precoTotal = (precoBase * quantidade).toFixed(2).replace('.', ',')
    return `R$ ${precoTotal}`
  }

  const adicionarAoCarrinho = () => {
    const itemCarrinho = {
      ...produtoSelecionado,
      quantidade,
      precoTotal: calcularPrecoTotal()
    }
    setCarrinho([...carrinho, itemCarrinho])
    fecharModal()
  }

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  }

  const ajustarQuantidadeCarrinho = (index, valor) => {
    const novoCarrinho = [...carrinho]
    const novaQuantidade = novoCarrinho[index].quantidade + valor
    
    if (novaQuantidade >= 1 && novaQuantidade <= 10) {
      novoCarrinho[index].quantidade = novaQuantidade
      const precoBase = parseFloat(novoCarrinho[index].preco.replace(" BTC", ""))
      novoCarrinho[index].precoTotal = `${(precoBase * novaQuantidade).toFixed(4)} BTC`
      setCarrinho(novoCarrinho)
    }
  }

  const finalizarCompra = () => {
    if (!usuarioLogado) {
      // Salvar o carrinho no localStorage para recuperar depois do login
      localStorage.setItem('carrinhoPendente', JSON.stringify(carrinho))
      navigate('/login')
    } else {
      // Aqui vamos implementar a lógica de checkout
      navigate('/checkout')
    }
  }

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

      {/* Botão do Carrinho */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setCarrinhoAberto(true)}
        className="fixed right-6 bottom-6 w-16 h-16 bg-gray-800 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center z-40"
      >
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {carrinho.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {carrinho.length}
            </span>
          )}
        </div>
      </motion.button>

      {/* Painel do Carrinho */}
      <AnimatePresence>
        {carrinhoAberto && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCarrinhoAberto(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Painel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-96 bg-gray-800 shadow-xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-white/30">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">Carrinho</h3>
                  <button
                    onClick={() => setCarrinhoAberto(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {carrinho.length === 0 ? (
                  <p className="text-white/60 text-center py-8">Seu carrinho está vazio</p>
                ) : (
                  <div className="space-y-4">
                    {carrinho.map((item, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex gap-4">
                          <img
                            src={item.imagem}
                            alt={item.nome}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold">{item.nome}</h4>
                            <p className="text-sm text-white/60">{item.descricao}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => ajustarQuantidadeCarrinho(index, -1)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-600 rounded hover:bg-gray-500"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{item.quantidade}</span>
                              <button
                                onClick={() => ajustarQuantidadeCarrinho(index, 1)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-600 rounded hover:bg-gray-500"
                              >
                                +
                              </button>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="font-bold">{item.precoTotal}</span>
                              <button
                                onClick={() => removerDoCarrinho(index)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {carrinho.length > 0 && (
                <div className="p-6 border-t border-white/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-xl font-bold">
                      {carrinho.reduce((total, item) => {
                        const preco = parseFloat(item.precoTotal.replace(" BTC", ""))
                        return total + preco
                      }, 0).toFixed(4)} BTC
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setCarrinho([])}
                      className="flex-1 px-4 py-3 border border-white/30 rounded-lg hover:bg-gray-700"
                    >
                      Limpar Carrinho
                    </button>
                    <button
                      onClick={finalizarCompra}
                      className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-400 rounded-lg"
                    >
                      {usuarioLogado ? 'Finalizar Compra' : 'Fazer Login para Comprar'}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal de Quantidade */}
      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 p-6 rounded-lg border border-white/30 w-96"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={produtoSelecionado.imagem}
                alt={produtoSelecionado.nome}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-bold">{produtoSelecionado.nome}</h3>
                <p className="text-sm text-white/60">{produtoSelecionado.descricao}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold">Quantidade:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => ajustarQuantidade(-1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600"
                >
                  -
                </button>
                <span className="text-xl font-bold w-8 text-center">{quantidade}</span>
                <button
                  onClick={() => ajustarQuantidade(1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-lg">Total:</span>
              <span className="text-xl font-bold">{calcularPrecoTotal()}</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={fecharModal}
                className="flex-1 px-4 py-2 border border-white/30 rounded hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={adicionarAoCarrinho}
                className={`flex-1 px-4 py-2 bg-${produtoSelecionado.cor}-500 hover:bg-${produtoSelecionado.cor}-400 rounded`}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Conteúdo Shop */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-white/90"
        >
          Nossos Produtos
        </motion.h1>

        {/* Filtros e Busca */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800/50 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/60 w-full sm:w-64"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {['todos', 'yellow', 'blue', 'red', 'purple', 'pink', 'green', 'orange'].map((cor) => (
              <motion.button
                key={cor}
                onClick={() => setFiltro(cor)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-lg border transition-all duration-200 ${
                  filtro === cor ? 'border-white scale-105' : 'border-white/30'
                } ${cor === 'todos' ? 'bg-gray-800/50' : `bg-${cor}-500/50`}`}
              >
                {cor === 'todos' ? 'Todos' : cor.charAt(0).toUpperCase() + cor.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {produtosFiltrados.map((produto, index) => (
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
                    onClick={() => abrirModalQuantidade(produto)}
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