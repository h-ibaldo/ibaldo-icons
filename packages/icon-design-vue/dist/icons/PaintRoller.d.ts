import type { DefineComponent } from 'vue';

export interface PaintRollerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaintRoller: DefineComponent<PaintRollerProps>;

export default PaintRoller;
export { PaintRoller };
