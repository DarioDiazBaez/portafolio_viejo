const fondo = {
  backgroundImage: 'url("img/fondo1.jpg")',
  backgroundSize: "cover"
};

const nombre = {
  backgroundColor: "#322222",
  opacity: "0.8",
  margin: "30px",
  padding: "15px",
  borderRadius: "30px"
};

export default function Header(props){
  return(
      <div className="container-fluid">
        <div className="d-flex justify-content-center row"style={fondo}>
          <div className="col-12 col-md-8 text-center">
            <div style={nombre}>
              <h1 className="text-light fw-bold">Dario Diaz Baez</h1>
              <p className="text-secondary">Dario Benigno Jesus Diaz Baez</p>
              <img src="svg/html.svg" width="35px" className="mx-2"/>
              <img src="svg/css.svg" width="35px" className="mx-2"/>
              <img src="svg/js.svg" width="35px" className="mx-2"/>
              <a href="https://es.reactjs.org/" target="_blank">
                <img src="svg/react.svg" width="40px" className="mx-2"/>
              </a>
              <a href="https://getbootstrap.com/" target="_blank">
                <img src="svg/bootstrap.svg" width="45px" className="mx-2"/>
              </a>
              <a href="https://sass-lang.com/" target="_blank">
                <img src="svg/sass.svg" width="45px" className="mx-2"/>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 my-auto ">
            <div >
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-code-slash img-fluid d-block mx-auto" viewBox="0 0 16 16"style={{marginBottom: "15px"}}>
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>)}