import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react';
import { getPerson } from './getPerson';
import { Reset } from './Reset';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

// these action objects represent all the eays in which state can change
type Action =
  | { type: 'initialize'; name: string }
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
}

export function PersonScore() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 100,
    loading: false,
  });
  // const [name, setName] = useState<string | undefined>();
  // const [score, setScore] = useState(0);
  // const [loading, setLoading] = useState(true);

  const addButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'initialize', name });
      const buttonRef = addButtonRef.current;
      console.log(buttonRef);
      buttonRef?.focus();
    });
  }, []);

  // useMemo
  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  //
  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
        <p>{expensiveCalculation}</p>
        <br />
        <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>
          Add
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
        <Reset onClick={handleReset} />
      </h3>
    </div>
  );
}

/** 
export function PersonScore() {
  useEffect(() => {
    async function getThePerson() {
      const person = await getPerson();
      console.log(person);
    }
    getThePerson();
  }, []);
  return null;
}
*/

function sillyExpensiveFunction() {
  console.log('Executing silly function');
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}
