import type { DefineComponent } from 'vue';

export interface LayoutBlocksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutBlocks: DefineComponent<LayoutBlocksProps>;

export default LayoutBlocks;
export { LayoutBlocks };
