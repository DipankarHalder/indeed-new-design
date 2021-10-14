import { useState, useEffect } from 'react';
import { CSidebar } from '../feature/CSidebar';
import { CBody } from '../feature/CBody';

export const CLayout = () => {
  const [steps, setSteps] = useState(1);
  const secondStep = () => setSteps(2)

  return (
    <div className="app-complete-wrapper">
      <div className="app-wrapper-inside">
        <CSidebar steps={steps} />
        <CBody steps={steps} secondStep={secondStep} />
      </div>
    </div>
  )
}
