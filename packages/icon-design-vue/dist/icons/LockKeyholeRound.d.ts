import type { DefineComponent } from 'vue';

export interface LockKeyholeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockKeyholeRound: DefineComponent<LockKeyholeRoundProps>;

export default LockKeyholeRound;
export { LockKeyholeRound };
