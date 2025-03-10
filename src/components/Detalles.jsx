const Detalles = () => {
  
    return(
        <div className="informacion">
            <div className="informacion_detalle">
                <h1>Alquiler de Piso en Pueblo Mascarat-Altea-Alicante</h1>
                <h2>Direccion Calle Sorell n°9</h2>
                <h3>ALQUILER POR LARGA TEMPORADA O CONDICIONES A CONVENIR DE MEDIA ESTANCIA</h3>
                <h3>EN LA PLANTA 14 VISTAS INIGUALABLES</h3>
                <h3>APARTAMENTO A ESTRENAR VIVIENDA Y MOBILIARIO, AMUEBLADO CON DISEÑO Y CONFORT, CON 1 DORMITORIOS, 1 BAÑO, SALÓN-COCINA CON ESPACIO ABIERTO Y GRANDES VENTANALES QUE OFRECEN ENCANTADORAS VISTAS A LA CIUDAD, CASCO HISTÓRICO, CATEDRAL, Y AL MAR. ¡DISFRUTA DE UNA ESTANCIA ÚNICA Y EMBLEMÁTICA EN .....! CONTÁCTANOS PARA MÁS INFORMACIÓN Y RESERVA.</h3>
                <h3>WHATSAPP:+34 666860022</h3> 
            </div> 

            <div className="pedirinfo">
                <div className="mensaje">
                    <div className="boton_mensaje">Contactar
                        <a href="#Mail">
                            <img className="logo_mensaje" src="/images/logomensaje1.png" alt="" />
                        </a>
                    </div>
                </div>

                <div className="pulso">
                    
                    <div className="wathsap-container">
                        <a href="https://wa.me/+34666860022?text=Quiero%20realizar%20un%20una consulta%20sobre el piso" >
                            <img className="wathsap-icon" src="/images/logonegro.png" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="ubicacion">
                    <div className="boton_ubicacion">
                        <a href="#Map">
                            <img className="logo_ubicacion" src="/images/ubicacion.png" alt="" />
                        </a>
                    </div>
                </div>

            </div>    
        </div>    
    );
};

export default Detalles;