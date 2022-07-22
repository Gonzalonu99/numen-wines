import { ImgText, StyledCards, StyledSpan, StyledTopWinesTitle, StyledWinesContainer } from './StyledWines';
import Contador from '../contador/';
import useAxios from '../../hooks/use-axios';


const Wines = () => {
  
const {data, isLoading, error} = useAxios("https://numen-react-project-e045e-default-rtdb.firebaseio.com/vinos.json");
const renderLoadingMsg = <div style={{backgroundColor: '#161314'}}>Loading...</div>
const errorMsg = error.message;
const renderErrorMsg = <div style={{ background: 'red', padding: 20 }}>There was an error: {error.message}</div>
  return (<>
    {errorMsg && renderErrorMsg}
    {isLoading && renderLoadingMsg}
    {!isLoading && !errorMsg &&
    <div
      style={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#161314',
        paddingTop: '30px',
      }}>
      <StyledTopWinesTitle id='vinos'>VINOS MÁS  <StyledSpan>VENDIDOS</StyledSpan></StyledTopWinesTitle>
      <StyledWinesContainer>
        {data.map((vino) => (
          <StyledCards key={vino.id}>
          <img alt='' src={vino.img} />
          <ImgText>Prod.: {vino.nombre}</ImgText>
          <ImgText>$ {vino.precio} </ImgText>
          <Contador/>
        </StyledCards>
        ))}
      </StyledWinesContainer>
    </div>}
    </>
  );
};

export default Wines;
