import type { DefineComponent } from 'vue';

export interface NodesForkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesFork: DefineComponent<NodesForkProps>;

export default NodesFork;
export { NodesFork };
