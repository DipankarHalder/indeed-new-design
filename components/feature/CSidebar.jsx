import Image from 'next/image';
import { Fside } from './steps/first/Fside';
import { Sside } from './steps/second/Sside';

export const CSidebar = (props) => {

  return (
    <div className={props.steps === 1 ? "app-sidebar registerFirst" : "app-sidebar registerNext"}>
      <div className="app-logo">
        <Image src="/wlogo.svg" alt="Indeed" width={70} height={20} />
      </div>

      {props.steps === 1 && <Fside />}
      {props.steps === 2 && <Sside />}

      <div className="app-slider-dots">
        <span className={props.steps === 1 && "dot-active"}></span>
        <span className={props.steps === 2 && "dot-active"}></span>
      </div>
        
    </div>
  )
}
