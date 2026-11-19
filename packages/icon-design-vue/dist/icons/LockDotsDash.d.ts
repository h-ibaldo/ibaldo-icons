import type { DefineComponent } from 'vue';

export interface LockDotsDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LockDotsDash: DefineComponent<LockDotsDashProps>;

export default LockDotsDash;
export { LockDotsDash };
