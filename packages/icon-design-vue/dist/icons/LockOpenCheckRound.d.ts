import type { DefineComponent } from 'vue';

export interface LockOpenCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenCheckRound: DefineComponent<LockOpenCheckRoundProps>;

export default LockOpenCheckRound;
export { LockOpenCheckRound };
