import type { DefineComponent } from 'vue';

export interface GripBarsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GripBarsVertical: DefineComponent<GripBarsVerticalProps>;

export default GripBarsVertical;
export { GripBarsVertical };
