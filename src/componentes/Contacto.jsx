const fondo = {
  backgroundImage: 'url("img/fondo2.jpg")',
  backgroundSize: "cover"
};

export default function Footer(props){

  return(
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center row" id="contacto"style={fondo}>
        <div className="col-12 col-md-5">
          <h1 className="text-light text-center d-block fs-2">Contacta conmigo</h1>
          <div className="d-flex justify-content-center align-items-center">
            <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/a" target="_blank" className="d-inline-block">
              <img src="svg/linkedin.svg" width="45px"/>
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="55" fill="white" className="bi bi-envelope-paper-heart d-inline-block" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <form action="https://formspree.io/f/moqrddkk" method="POST">
            <input className="rounded border-0 form-control shadow-none my-3" type="email" name="email" placeholder="Tu Email:" />
            <textarea className="rounded border-0 form-control shadow-none my-3" name="message" placeholder="Tu Mensaje:"></textarea>
            <button className="btn btn-primary form-control my-3" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>)}