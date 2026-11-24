import type { DefineComponent } from 'vue';

export interface AdjustVerticalBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustVerticalBlock: DefineComponent<AdjustVerticalBlockProps>;

export default AdjustVerticalBlock;
export { AdjustVerticalBlock };
