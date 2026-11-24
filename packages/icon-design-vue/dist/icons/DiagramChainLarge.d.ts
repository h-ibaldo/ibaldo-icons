import type { DefineComponent } from 'vue';

export interface DiagramChainLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramChainLarge: DefineComponent<DiagramChainLargeProps>;

export default DiagramChainLarge;
export { DiagramChainLarge };
