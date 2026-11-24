import type { DefineComponent } from 'vue';

export interface LockEyeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockEyeRound: DefineComponent<LockEyeRoundProps>;

export default LockEyeRound;
export { LockEyeRound };
