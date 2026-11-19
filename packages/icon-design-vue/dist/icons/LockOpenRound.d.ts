import type { DefineComponent } from 'vue';

export interface LockOpenRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockOpenRound: DefineComponent<LockOpenRoundProps>;

export default LockOpenRound;
export { LockOpenRound };
