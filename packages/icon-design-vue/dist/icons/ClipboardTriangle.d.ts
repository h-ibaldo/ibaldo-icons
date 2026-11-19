import type { DefineComponent } from 'vue';

export interface ClipboardTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardTriangle: DefineComponent<ClipboardTriangleProps>;

export default ClipboardTriangle;
export { ClipboardTriangle };
