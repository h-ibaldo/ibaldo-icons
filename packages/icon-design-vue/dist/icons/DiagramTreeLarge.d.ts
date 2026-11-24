import type { DefineComponent } from 'vue';

export interface DiagramTreeLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramTreeLarge: DefineComponent<DiagramTreeLargeProps>;

export default DiagramTreeLarge;
export { DiagramTreeLarge };
