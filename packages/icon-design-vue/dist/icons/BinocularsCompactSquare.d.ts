import type { DefineComponent } from 'vue';

export interface BinocularsCompactSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsCompactSquare: DefineComponent<BinocularsCompactSquareProps>;

export default BinocularsCompactSquare;
export { BinocularsCompactSquare };
