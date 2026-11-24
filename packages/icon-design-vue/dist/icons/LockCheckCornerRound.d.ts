import type { DefineComponent } from 'vue';

export interface LockCheckCornerRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCheckCornerRound: DefineComponent<LockCheckCornerRoundProps>;

export default LockCheckCornerRound;
export { LockCheckCornerRound };
