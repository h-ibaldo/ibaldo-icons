import type { DefineComponent } from 'vue';

export interface DiagramTreeRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramTreeRight: DefineComponent<DiagramTreeRightProps>;

export default DiagramTreeRight;
export { DiagramTreeRight };
