import type { DefineComponent } from 'vue';

export interface NodesZigzagLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesZigzagLarge: DefineComponent<NodesZigzagLargeProps>;

export default NodesZigzagLarge;
export { NodesZigzagLarge };
