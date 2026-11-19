import type { DefineComponent } from 'vue';

export interface LockXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockXRound: DefineComponent<LockXRoundProps>;

export default LockXRound;
export { LockXRound };
