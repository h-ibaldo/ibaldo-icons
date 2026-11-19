import type { DefineComponent } from 'vue';

export interface LockCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockCircle: DefineComponent<LockCircleProps>;

export default LockCircle;
export { LockCircle };
