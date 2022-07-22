import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useAxios from '../../hooks/use-axios';

const handleDragStart = e => e.preventDefault();

const responsive = {
  320: { items: 1 },
  550: { items: 2 },
  768: { items: 3 },
};

const Gallery = () => {
  const {data, isLoading, error} = useAxios("https://numen-react-project-e045e-default-rtdb.firebaseio.com/bodegas.json")
  const items = data.map((bodega)=> <img key={bodega.id} title={bodega.title} src={bodega.img} onDragStart={handleDragStart}/>)
  return (<>
  {isLoading ? <div style={{backgroundColor: '#161314'}}>Loading...</div> :
    error.isError ? <div style={{ background: 'red', padding: 20 }}>There was an error: {error.message}</div> :
    <div className='contenedor-general'>
      <h2 className='carousel-h2' id='bodegas'><span className='span-title'>NUESTRAS</span>  BODEGAS</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        infinite
        autoPlay
        autoPlayInterval={1500}
      />
    </div>
  }
  </>
  );
};

export default Gallery;
