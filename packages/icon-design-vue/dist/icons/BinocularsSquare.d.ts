import type { DefineComponent } from 'vue';

export interface BinocularsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsSquare: DefineComponent<BinocularsSquareProps>;

export default BinocularsSquare;
export { BinocularsSquare };
