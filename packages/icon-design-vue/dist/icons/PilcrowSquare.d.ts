import type { DefineComponent } from 'vue';

export interface PilcrowSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PilcrowSquare: DefineComponent<PilcrowSquareProps>;

export default PilcrowSquare;
export { PilcrowSquare };
