import type { DefineComponent } from 'vue';

export interface DragImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DragImage: DefineComponent<DragImageProps>;

export default DragImage;
export { DragImage };
