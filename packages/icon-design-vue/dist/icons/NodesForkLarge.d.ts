import type { DefineComponent } from 'vue';

export interface NodesForkLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NodesForkLarge: DefineComponent<NodesForkLargeProps>;

export default NodesForkLarge;
export { NodesForkLarge };
