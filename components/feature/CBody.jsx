import { Fbody } from './steps/first/Fbody';

export const CBody = (props) => {
  return (
    <div className="app-bodywrap">
      {props.steps === 1 && <Fbody secondStep={props.secondStep} />}

    </div>
  )
}
