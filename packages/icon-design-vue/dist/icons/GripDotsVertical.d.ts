import type { DefineComponent } from 'vue';

export interface GripDotsVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GripDotsVertical: DefineComponent<GripDotsVerticalProps>;

export default GripDotsVertical;
export { GripDotsVertical };
