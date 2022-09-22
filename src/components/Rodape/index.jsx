import './styles.css'
export const Rodape = () => {
    return (

            <footer>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>footer</title>
                    <link rel="stylesheet" href="style.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
               
                <div className="footer-bottom">
                    <p>copyright &copy;2022 Todos os direitor resevados</p>
                    <ul className="socials">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                    </ul>
                </div>
            </footer>
    )
}