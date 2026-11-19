import type { DefineComponent } from 'vue';

export interface BrowserTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserTriangle: DefineComponent<BrowserTriangleProps>;

export default BrowserTriangle;
export { BrowserTriangle };
