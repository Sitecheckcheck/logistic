import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-arrow">
          <img src="img/стрелкавлево.png" alt="arrow" />
        </div>
        <div className="header-block">
          <div className="header-title">
            <p className="header-title-text">
              ST<span className="header-ampersant"> & </span>L
            </p>
          </div>
          <div className="header-personal">
            <p>Личный кабинет</p>
            <img src="img/стрелкавниз.svg" alt="arrow" />
          </div>
        </div>
      </header>
      <main className="main">
        <nav className="nav">
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>
          <div className="nav-icon">
            <img src="img/иконкаменю.svg" alt="" />
          </div>

        </nav>
        <nav className="nav-text">
          <div className="nav-text-item nav-text-item-orange">
            <p>Цепочка поставок</p>
          </div>
          <div className="nav-text-item nav-text-item-change">
            <p>Оперативная работа</p>
          </div>
          <div className="nav-text-item">
            <p>Архив</p>
          </div>
          <div className="nav-text-item">
            <p>Аналитика</p>
          </div>
          <div className="nav-text-item">
            <p>Настройки</p>
          </div>

        </nav>
        <div className="main-content">
          <footer className="footer"></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
