import styled from "styled-components";

export const HomePage = () => {
    return (
        <HomeContainer>
            <Tile>Julif Vidal</Tile>

            <Subtile>Artista visual</Subtile>

            <ImgContainer src="intro.jpeg" alt="intro" />

            <TextContainer>
                <Text>
                    En este espacio podrás ver las obras que he ido creando durante algún tiempo, muchas de ellas son parte de mis años de facultad y otras están realizadas por fuera. Lo que es seguro es que todas me han dejado aprendizajes y son un proceso fundamental en mi búsqueda artística.
                </Text>
                <Text>
                    La mayoría de mis obras parten desde el cuestionamiento por la norma, más específicamente por lo incorporado, por aquello a lo que estamos acostumbrados a tal punto que parece "lo natural". Creo en el arte como el medio y la herramienta para corrernos del eje, para repensarnos, cuestionarnos y hacernos preguntas. Es en este sentido que siento que el arte no es en sí la obra sino lo que ella produce dentro de cada ser que la mira, incluso de aquel que pasa deprisa sin detenerse. Las dudas, las decisiones, las sensaciones que no queríamos sentir y las que sí, las emociones que se despiertan y las que se ocultan, los pensamientos que nos generan, aquellos que compartimos y los que decidimos guardar para nosotros mismos, eso es arte y habita en cada uno de nosotros.
                </Text>
                <Text>
                    Las obras aparecen como el medio para sacarlos a flote, para hacerlos presentes, para conocernos y quizás desconocernos también un poco más.
                </Text>
                <Text>
                    Te invito a que visites mi galería y que juntos creemos un poco de arte.
                </Text>
                <Text>
                    Abajo te quedan las líneas de contacto por cualquier consulta, sugerencia o contratación.
                </Text>
            </TextContainer>

        </HomeContainer>
    )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.img`
  max-height: 90vh;
  width: fit-content;
  max-width: calc(100vw - 50px);
  margin-bottom: 10px;
`;

const Tile = styled.h1`
  font-family: trebuchet ms, serif;
  margin-bottom: 10px;
`;

const Subtile = styled.h1`
  color: rgb(99, 85, 74);
  font-family: trebuchet ms, serif;
  margin-bottom: 30px;
  font-size: 20px;
`;

const Text = styled.p`
  margin-top: 0;
  font-family: didot, serif;
  max-width: 600px;
  text-align: center;
  padding: 0 10px;
`;

const TextContainer = styled.p`
  margin-top: 20px;
`;
