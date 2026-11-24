import type { DefineComponent } from 'vue';

export interface LockCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckRound: DefineComponent<LockCheckRoundProps>;

export default LockCheckRound;
export { LockCheckRound };
