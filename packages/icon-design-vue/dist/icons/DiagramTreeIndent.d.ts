import type { DefineComponent } from 'vue';

export interface DiagramTreeIndentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiagramTreeIndent: DefineComponent<DiagramTreeIndentProps>;

export default DiagramTreeIndent;
export { DiagramTreeIndent };
