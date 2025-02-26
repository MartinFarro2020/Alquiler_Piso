const Slider = () => {

    return(
        <div className="container">
            <div className="content">
                <div className="bloqueuno">
                    <h2>EN ALQUILER</h2>
                </div>
                <div className="bloquedos">
                    <div className="bloquetres">
                        <h4>Piso en la calle no recuerdo 123 Ciudad</h4>
                        <div className="images-logos">
                            <div className="logos">
                                <img src="/images/logo_cama_logo.png"/>
                                <h3>4 Habs.</h3>
                            </div>
                            <div className="logos">
                                <img src="/images/logo_baño_log.png"/>
                                <h3>2 baños.</h3>
                            </div>
                            <div className="logos">
                                <img src="/images/logo_metrocuadrado.png"/>
                                <h3>80 m2.</h3>
                            </div>
                            <div className="logos">
                                <img src="/images/logo_planta.png"/>
                                <h3>2° planta</h3>
                            </div>
                            <div className="logos">
                                <img src="/images/logo_asensor.png"/>
                                <h3>Asensor</h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bloquecuatro"></div>
                </div>
            
                <div className="slider">
                    <div className="image-list">
                        <img src="/images/img1.jpeg" alt="" className="image-item"/>
                        <img src="/images/img2.jpeg" alt="" className="image-item"/>
                        <img src="/images/img3.jpeg" alt="" className="image-item"/>
                        <img src="/images/img4.jpeg" alt="" className="image-item"/>   
                        <img src="/images/img5.jpeg" alt="" className="image-item"/>
                        <img src="/images/img6.jpeg" alt="" className="image-item"/>
                        <img src="/images/img7.jpeg" alt="" className="image-item"/>
                        <img src="/images/img8.jpeg" alt="" className="image-item"/>
                        <img src="/images/img9.jpeg" alt="" className="image-item"/>
                        <img src="/images/img10.jpeg" alt="" className="image-item"/>
                        <img src="/images/img11.jpeg" alt="" className="image-item"/>
                        <img src="/images/img12.jpeg" alt="" className="image-item"/>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default Slider;