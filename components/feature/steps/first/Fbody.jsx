import { IoPersonCircleOutline, IoStorefront } from "react-icons/io5";

export const Fbody = (props) => {
  return (
    <div className="app-steps first-step">
      <span className="app-step-icon">👋</span>
      <h2>Choose of the account type</h2>
      <p>It is a long established fact that a render will be distracted <br />by the readable eontent of a page.</p>
      <ul>
        <li>
          <span><IoPersonCircleOutline /></span>
          <div className="app-icon-step">
            <h6>Personal</h6>
            <p>Search and find jobs.</p>
          </div>
        </li>
        <li>
          <span><IoStorefront /></span>
          <div className="app-icon-step">
            <h6>Business</h6>
            <p>Post and share a job.</p>
          </div>
        </li>
      </ul>
      <div className="app-step-button">
        <span onClick={() => props.secondStep()}>Next Step</span>
      </div>
    </div>
  )
}
