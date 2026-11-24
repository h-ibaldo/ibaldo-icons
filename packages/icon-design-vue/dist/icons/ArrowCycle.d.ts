import type { DefineComponent } from 'vue';

export interface ArrowCycleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowCycle: DefineComponent<ArrowCycleProps>;

export default ArrowCycle;
export { ArrowCycle };
