import type { DefineComponent } from 'vue';

export interface NodesTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesTriangle: DefineComponent<NodesTriangleProps>;

export default NodesTriangle;
export { NodesTriangle };
