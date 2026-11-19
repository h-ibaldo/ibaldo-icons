import type { DefineComponent } from 'vue';

export interface EjectDownSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EjectDownSquare: DefineComponent<EjectDownSquareProps>;

export default EjectDownSquare;
export { EjectDownSquare };
