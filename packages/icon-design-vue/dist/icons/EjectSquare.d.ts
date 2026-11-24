import type { DefineComponent } from 'vue';

export interface EjectSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectSquare: DefineComponent<EjectSquareProps>;

export default EjectSquare;
export { EjectSquare };
