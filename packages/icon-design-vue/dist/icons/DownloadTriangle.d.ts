import type { DefineComponent } from 'vue';

export interface DownloadTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DownloadTriangle: DefineComponent<DownloadTriangleProps>;

export default DownloadTriangle;
export { DownloadTriangle };
