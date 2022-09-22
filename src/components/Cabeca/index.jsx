import './styles.css';

export const Cabeca = ({pesquisa, buscaODA}) => {
    return (

        <div className="menu">
         
            <div className="brand">
                <img src="/images/logo.png" alt="Logo do Bocaweb - Uma boca de cor laranja, de onde sai uma figura na cor preta, que simboliza ondas sonoras. Parte das ondas estão em cor laranja, formando a letra W." width="100" height="auto" className="d-inline-block align-top"></img>
            </div>
            <div className='esquedo'>
                <div className='botoe-menu'>
                <ul>
                  <li>
                      <a href="#!" className="link-item">Inicio</a>
                  </li>
                  <li>
                      <a href="https://www.bocaweb.com.br/contato" className="link-item">Suporte</a>
                  </li>
              </ul>
              </div>

            <div className="search-box">
            <input
                name='busca'
                type='text'
                value={pesquisa}
                placeholder='Pesquisar ODAS'
                onChange={buscaODA}
                className="search-txt"
            />
            <a href="#!" className="search-button">
            <i className="fa fa-search"></i>
            </a>
            </div>
        </div>
      </div>
      
    )
}