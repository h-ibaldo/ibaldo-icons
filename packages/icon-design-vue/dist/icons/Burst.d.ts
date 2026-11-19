import type { DefineComponent } from 'vue';

export interface BurstProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Burst: DefineComponent<BurstProps>;

export default Burst;
export { Burst };
