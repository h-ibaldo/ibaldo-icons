import type { DefineComponent } from 'vue';

export interface AdjustProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Adjust: DefineComponent<AdjustProps>;

export default Adjust;
export { Adjust };
