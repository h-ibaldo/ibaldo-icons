import type { DefineComponent } from 'vue';

export interface CompassOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassOff: DefineComponent<CompassOffProps>;

export default CompassOff;
export { CompassOff };
