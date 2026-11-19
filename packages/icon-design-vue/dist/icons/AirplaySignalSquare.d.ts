import type { DefineComponent } from 'vue';

export interface AirplaySignalSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AirplaySignalSquare: DefineComponent<AirplaySignalSquareProps>;

export default AirplaySignalSquare;
export { AirplaySignalSquare };
