import type { DefineComponent } from 'vue';

export interface AdjustVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustVertical: DefineComponent<AdjustVerticalProps>;

export default AdjustVertical;
export { AdjustVertical };
