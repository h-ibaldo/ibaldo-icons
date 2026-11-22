import type { DefineComponent } from 'vue';

export interface NodesRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesRing: DefineComponent<NodesRingProps>;

export default NodesRing;
export { NodesRing };
