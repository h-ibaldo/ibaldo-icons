import type { DefineComponent } from 'vue';

export interface PercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Percent: DefineComponent<PercentProps>;

export default Percent;
export { Percent };
