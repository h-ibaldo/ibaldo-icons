import type { DefineComponent } from 'vue';

export interface CloudSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSquare: DefineComponent<CloudSquareProps>;

export default CloudSquare;
export { CloudSquare };
