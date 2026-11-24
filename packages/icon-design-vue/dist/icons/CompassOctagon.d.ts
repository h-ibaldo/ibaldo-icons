import type { DefineComponent } from 'vue';

export interface CompassOctagonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassOctagon: DefineComponent<CompassOctagonProps>;

export default CompassOctagon;
export { CompassOctagon };
