import type { DefineComponent } from 'vue';

export interface NodesTriangleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesTriangleLarge: DefineComponent<NodesTriangleLargeProps>;

export default NodesTriangleLarge;
export { NodesTriangleLarge };
