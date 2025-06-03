import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial'
import TelaShop from './TelaShop/TelaShop'
import TelaFAQ from './TelaFAQ/TelaFAQ'
import TelaSeguranca from './TelaSeguranca/TelaSeguranca'
import TelaLogin from './TelaLogin/TelaLogin'
import TelaCadastro from './TelaCadastro/TelaCadastro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/shop" element={<TelaShop />} />
        <Route path="/faq" element={<TelaFAQ />} />
        <Route path="/seguranca" element={<TelaSeguranca />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastrar" element={<TelaCadastro />} />
      </Routes>
    </Router>
  )
}

export default App