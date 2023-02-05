import {useState, useEffect, useRef} from 'react'
import style from './css/index.module.css'
import {motion} from 'framer-motion'
import weed01 from './imgs/2h-media-1SDw4biQ6us-unsplash.jpg'
import weed02 from './imgs/matthew-brodeur-qcCPIhhdgTw-unsplash.jpg'
import weed03 from './imgs/roman-kasyan-zlUgzTz56jo-unsplash.jpg'
import weed04 from './imgs/stephen-hocking-aX9KlIQlrVE-unsplash.jpg'

const imgs = [weed01, weed02, weed03, weed04]

function App() {
  const carrousel = useRef()
  const [width, setWidth] = useState(0)

 useEffect(() => {
   console.log(carrousel.current.scrollWidth, carrousel.current.offsetWidth)
   setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth)
 } ,[])

  return (
   <div className={style.container}>
     <motion.div ref={carrousel} className={style.carrousel} whileTap={{cursor:'grabbing'}}> {/* hidden */}
        <motion.div 
        className={style.inner}
        drag='x'
        dragConstraints={{right:0, left: - width}}
        initial={{x:100}}
        animate={{x:0}}
        transition={{duration:0.8}}
        >
            {imgs.map((img) => 
            <motion.div key={img} className={style.item}>
                <img src={img}/>
            </motion.div>)}
        </motion.div>
     </motion.div>
   </div>
  );
}

export default App;
