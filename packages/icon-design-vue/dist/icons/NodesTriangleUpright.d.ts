import type { DefineComponent } from 'vue';

export interface NodesTriangleUprightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesTriangleUpright: DefineComponent<NodesTriangleUprightProps>;

export default NodesTriangleUpright;
export { NodesTriangleUpright };
