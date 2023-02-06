import styles from './use-eval.module.css';

/* eslint-disable-next-line */
export interface UseEvalProps {}

export function UseEval(props: UseEvalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UseEval!</h1>
    </div>
  );
}

export default UseEval;
