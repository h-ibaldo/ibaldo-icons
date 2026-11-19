import type { DefineComponent } from 'vue';

export interface FolderTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderTriangle: DefineComponent<FolderTriangleProps>;

export default FolderTriangle;
export { FolderTriangle };
