import Logo from './assets/images/logo.svg'
import './App.scss';

function App() {
  return (
    <div>
      <main className='rodape-superior'>
        <img src={Logo} />
        <p>Investir</p>
        <p>Quanto custa</p>
        <p>Sobre</p>
        <p>Aprender</p>
        <p>Magazine</p>
        <p>Ferramentas</p>
        <p>Login</p>
        <button className='abrir-conta'>Abra sua conta</button>
      </main>

      <section className='faixa-principal'>
      <div className='pequenos-textos'>
          <h1 className='text-1'>Invista em viver.</h1>
          <p className='pp'>Investir toma tempo, mas não precisa ser o seu.</p>
          <p className='pp'>Conte com nossos especialistas.</p>
          <button className='comece-agora'>Comece agora</button>
        </div>
      </section>
    </div>
  );
}

export default App;
