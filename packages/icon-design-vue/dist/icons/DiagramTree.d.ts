import type { DefineComponent } from 'vue';

export interface DiagramTreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramTree: DefineComponent<DiagramTreeProps>;

export default DiagramTree;
export { DiagramTree };
