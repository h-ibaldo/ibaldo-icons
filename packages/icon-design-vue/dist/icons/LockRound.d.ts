import type { DefineComponent } from 'vue';

export interface LockRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockRound: DefineComponent<LockRoundProps>;

export default LockRound;
export { LockRound };
