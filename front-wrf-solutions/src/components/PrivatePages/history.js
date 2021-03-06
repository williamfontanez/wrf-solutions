import { useHistory } from 'react-router-dom';

const HistoryHook = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/login');
  }

  return (
    <div>
      <h1>Hi there!</h1>
      <button onClick={redirect}>Log in</button>
    </div>
  );
};