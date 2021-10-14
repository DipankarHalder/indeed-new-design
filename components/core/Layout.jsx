import { Fragment } from 'react';
import { Header } from '../feature/Header';

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="app-wrapper">
        <div className="app-container">
          {props.children}
        </div>
      </div>
    </Fragment>
  )
}
