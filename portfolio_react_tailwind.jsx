import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

// 🌐 Componentes Globais
function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-2xl font-bold">Ladislau André</h1>
      <ul className="flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/services">Serviços</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} Ladislau André - Analista de Dados</p>
    </footer>
  );
}

// 🏠 Páginas
function Home() {
  return (
    <motion.div className="p-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-4xl font-bold mb-4">Olá, eu sou o Ladislau André</h2>
      <p className="text-lg">Analista de Dados com certificações Microsoft (Excel Expert, Power BI, Fabric).</p>
    </motion.div>
  );
}

function About() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
      <p>
        Sou formado em Ciências da Informação e atualmente curso Ciências da Computação. Trabalho como Analista de Dados, ajudando empresas a tomarem decisões baseadas em dados.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      {[
        { title: "Dashboards Interativos", desc: "Criação de relatórios no Power BI com insights acionáveis." },
        { title: "Automação em Excel", desc: "Modelos avançados com macros e fórmulas inteligentes." },
        { title: "Data Warehousing", desc: "Implementação de soluções no Microsoft Fabric." }
      ].map((s, i) => (
        <motion.div key={i} className="bg-white shadow-md rounded-2xl p-6" whileHover={{ scale: 1.05 }}>
          <h3 className="font-bold text-xl mb-2">{s.title}</h3>
          <p>{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div className="p-10 grid md:grid-cols-2 gap-6">
      {[
        { title: "Análise de Vendas", desc: "Dashboard de oportunidades e vendas no Power BI." },
        { title: "Gestão de Inventário", desc: "Modelo preditivo de estoque usando Python + SQL." },
        { title: "Excel Avançado", desc: "Relatório automatizado para controle financeiro." },
        { title: "Fabric Data Lake", desc: "Integração de dados para BI corporativo." }
      ].map((p, i) => (
        <motion.div key={i} className="bg-gray-100 rounded-2xl p-6 shadow-md" whileHover={{ scale: 1.03 }}>
          <h3 className="text-xl font-bold mb-2">{p.title}</h3>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Blog() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Artigos e Insights</h2>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded-xl shadow-md">Como o Microsoft Fabric está revolucionando a análise de dados</li>
        <li className="bg-gray-100 p-4 rounded-xl shadow-md">10 dicas para dominar o Power BI</li>
        <li className="bg-gray-100 p-4 rounded-xl shadow-md">Excel Expert: muito além de tabelas dinâmicas</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Seu nome" className="w-full p-3 border rounded-xl" />
        <input type="email" placeholder="Seu email" className="w-full p-3 border rounded-xl" />
        <textarea placeholder="Sua mensagem" className="w-full p-3 border rounded-xl" rows="4"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">Enviar</button>
      </form>
    </div>
  );
}

// 🚀 App Principal
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
