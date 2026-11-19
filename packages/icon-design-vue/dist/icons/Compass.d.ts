import type { DefineComponent } from 'vue';

export interface CompassProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Compass: DefineComponent<CompassProps>;

export default Compass;
export { Compass };
