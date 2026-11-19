import type { DefineComponent } from 'vue';

export interface CompassSquareOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassSquareOff: DefineComponent<CompassSquareOffProps>;

export default CompassSquareOff;
export { CompassSquareOff };
