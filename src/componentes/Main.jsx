export default function Carousel(props){
  
  return(
      <div className="container">
        <div className="d-flex row mt-3">
          <div className="col-12 col-md-7">
            <div className="card mb-3 bg-secondary px-2 py-2">
              <h2 className="text-center text-light">Proyectos</h2>
              <p className="text-light text-center">Estos son algunos Proyectos realizados por mi</p>
            </div>
{/*card1--------------------------------------------------------------------------------------*/}
            <div className="card mb-3 bg-secondary px-2 py-2" id="proyecto1">
              <a href="https://dariodiazbaez.github.io/photo_finder/" target="_blank">
                <img src="img/fotosreact.jpg" className="card-img-top" alt="Proyecto fotos"/>
              </a>
              <div className="card-body">
                <h5 className="card-title text-light">Galeria de imágenes</h5>
                <p className="card-text text-light">Este proyecto es un buscador de imágenes, se escribe en el buscador una palabra y se mostraran imágenes relacionadas con la búsqueda. Es posible ver más resultados a los mostrados en pantalla con los botones "anterior" y "siguiente" Esta hecho en React utilizando el siclo de vida para la estructuración y para el funcionamiento se usa una API de imágenes la cual se le cambian los parámetros para la búsqueda personalizada</p>  
              </div>
            </div>
{/*card2--------------------------------------------------------------------------------------*/}
            <div className="card mb-3 bg-secondary" id="proyecto2">
              <div className="row px-2 py-2 align-items-center">
                <div className="col-md-4 text-center">
                  <a href="https://dariodiazbaez.github.io/calculadora-js.github.io/" target="_blank">
                    <img src="img/calculadora.jpg" className="img-fluid" alt="..."/>
                  </a>
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">
                    <h5 className="card-title text-light">Calculadora</h5>
                    <p className="card-text text-light">Esta es una calculadora echa con HTML, CSS y JavaScript nativo. Se utiliza el evento onclick para leer los datos</p>
                  </div>
                </div>
              </div>
            </div>
{/*card3--------------------------------------------------------------------------------------*/}
            <div className="card mb-3 bg-secondary" id="proyecto3">
              <div className="row px-2 py-2 align-items-center">
                <div className="col-lg-5">
                  <a href="https://dariodiazbaez.github.io/meme-generator/" target="_blank">
                    <img src="img/meme.jpg" className="img-fluid rounded-start" alt="..."/>
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="card-body">
                    <h5 className="card-title text-light">Generador de memes</h5>
                    <p className="card-text text-light">En este proyecto se puden crear memes con un texto superior y inferior, lo interesante es que se puede descarga la imagen generada utilizando el script html2canvas. El proyecto esta echo en react y con Bootstrap</p>
                  </div>
                </div>
              </div>
            </div>
{/*separador--------------------------------------------------------------------------------------*/} 
          </div>

          <div className="col-12 col-md-5 sticky-top">
            <div className="sticky-top mb-3">
{/*info-------------------------------------------------------------------------------------------*/}
              <div className="bg-secondary rounded-3 py-3 px-3 mb-3">
                <h2 className="text-center text-light">Sobre Mi</h2>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
{/*skillset---------------------------------------------------------------------------------------*/}
              <div className="bg-secondary rounded-3 py-3 px-3 mb-3">
                <h2 className="text-center text-light">SkillSet</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item bg-secondary">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <div className="accordion-button collapsed bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Front-end
                      </div>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <img src="svg/html.svg" width="25px" className="mx-1"/>
                        <img src="svg/css.svg" width="25px" className="mx-1"/>
                        <img src="svg/js.svg" width="25px" className="mx-1"/>
                        <a href="https://es.reactjs.org/" target="_blank">
                          <img src="svg/react.svg" width="30px" className="mx-1"/>
                        </a>
                        <a href="https://getbootstrap.com/" target="_blank">
                          <img src="svg/bootstrap.svg" width="35px" className="mx-1"/>
                        </a>
                        <a href="https://sass-lang.com/" target="_blank">
                          <img src="svg/sass.svg" width="35px" className="mx-1"/>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-secondary">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <div className="accordion-button collapsed bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Back-end
                      </div>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body text-light">
                        <a href="https://nodejs.org/es/" target="_blank">
                          <img src="svg/nodejs.svg" width="30px" className="mx-1"/>
                        </a>
                        Próximamente
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-secondary">
                    <h2 className="accordion-header" id="flush-headingthree">
                      <div className="accordion-button collapsed bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree" aria-expanded="false" aria-controls="flush-collapsethree">
                        Otras Tecnologías
                      </div>
                    </h2>
                    <div id="flush-collapsethree" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <a href="https://www.arduino.cc/" target="_blank">
                          <img src="svg/arduino.svg" width="25px" className="mx-1"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
{/*separador--------------------------------------------------------------------------------------*/}
            </div>      
          </div>
        </div>
      </div>)}