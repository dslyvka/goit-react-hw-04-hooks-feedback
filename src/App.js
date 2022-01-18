import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import { Fragment } from 'react';
import { useState } from 'react';

// class AppOld extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onBtnClick = value => {
//     this.setState(prevState => {
//       return { [value]: prevState[value] + 1 };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const rating = (good / (good + bad + neutral)) * 100;
//     const total = good + bad + neutral;
//     const options = Object.keys(this.state);

//     return (
//       <Fragment>
//         <FeedbackOptions options={options} onLeaveFeedback={this.onBtnClick} />
//         {total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={rating}
//           />
//         ) : (
//           <Notification />
//         )}
//       </Fragment>
//     );
//   }
// }

function App() {
  const [good, setgood] = useState(0);
  const [bad, setbad] = useState(0);
  const [neutral, setneutral] = useState(0);

  const onBtnClick = value => {
    switch (value) {
      case 'good':
        setgood(good + 1);
        break;
      case 'bad':
        setbad(bad + 1);
        break;
      case 'neutral':
        setneutral(neutral + 1);
        break;
      default:
        return;
    }
  };
  // useEffect(() => {}, [good, bad, neutral]);
  const rating = (good / (good + bad + neutral)) * 100;
  const total = good + bad + neutral;
  const options = ['good', 'bad', 'neutral'];

  return (
    <Fragment>
      <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={rating}
        />
      ) : (
        <Notification />
      )}
    </Fragment>
  );
}

export default App;
