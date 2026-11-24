import type { DefineComponent } from 'vue';

export interface PenToolProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PenTool: DefineComponent<PenToolProps>;

export default PenTool;
export { PenTool };
