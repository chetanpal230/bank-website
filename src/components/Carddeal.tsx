import { card} from '../assets';
import styles, {layout} from '../style'
import Button from './Button';

const Carddeal = () => (
    <section className={`${layout.section} xl:px-0 sm:px-16 md:px-14 px-6`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus praesentium officiis harum magnam id porro odio beatae deserunt, fugiat quia?</p>
        <Button styles={`mt-10`}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="Card" className='w-[100%] h-[100%]'/>
      </div>
      
    </section>
  )


export default Carddeal
