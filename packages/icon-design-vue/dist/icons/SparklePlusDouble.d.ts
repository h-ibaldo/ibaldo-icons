import type { DefineComponent } from 'vue';

export interface SparklePlusDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparklePlusDouble: DefineComponent<SparklePlusDoubleProps>;

export default SparklePlusDouble;
export { SparklePlusDouble };
