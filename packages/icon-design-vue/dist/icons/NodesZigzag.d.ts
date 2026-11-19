import type { DefineComponent } from 'vue';

export interface NodesZigzagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesZigzag: DefineComponent<NodesZigzagProps>;

export default NodesZigzag;
export { NodesZigzag };
