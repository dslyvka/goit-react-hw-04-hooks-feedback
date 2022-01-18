import { Fragment } from 'react';
import {ListStyled} from './FeedbackOptions.styled'
import { v4 as uuidv4 } from 'uuid';



function FeedbackOptions({ options, onLeaveFeedback }) {
  const btns = options;
  return (
    <Fragment>
      <h1 style={{ "textAlign": 'center'}}>Please leave feedback</h1>
      <section>
        <ListStyled>
          {btns.map(btn => {
            return (
              <li key={uuidv4()}>
                <button value={btn} onClick={() => onLeaveFeedback(btn)}>
                  {btn}
                </button>
              </li>
            );
          })}
        </ListStyled>
      </section>
    </Fragment>
  );
}

export default FeedbackOptions;
