import type { DefineComponent } from 'vue';

export interface FolderAlertTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderAlertTriangle: DefineComponent<FolderAlertTriangleProps>;

export default FolderAlertTriangle;
export { FolderAlertTriangle };
