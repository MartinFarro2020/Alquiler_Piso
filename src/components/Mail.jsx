const Mail = () =>{

        return(
            
                <div className="mail" id="Mail">
                    <h2>MESSAGE</h2>
                    <form className="formulario" action="https://formsubmit.co/martin.farro.martinez@gmail.com" method="POST">
                        <label htmlFor="Nombre">Nombre</label>
                        <input type="text" name="name"/>

                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" name="email" />

                        <label htmlFor="subject">Asunto</label>
                        <input type="text" name="subject" />

                        <label htmlFor="comments">Comentarios</label>
                        <textarea name="comments" cols="15" rows="7" id=""></textarea>
                    
                        <input className="enviar" type="submit" value="Enviar" />
                        <input type="hidden" name="_next" value="http://localhost:5173" />
                        <input type="hidden" name="_captcha" value="false"/>
                    </form>
                </div>
        );
};

export default Mail;