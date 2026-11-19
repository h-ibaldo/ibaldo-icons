import type { DefineComponent } from 'vue';

export interface CompassXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassX: DefineComponent<CompassXProps>;

export default CompassX;
export { CompassX };
