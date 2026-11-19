import type { DefineComponent } from 'vue';

export interface CompassPocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassPocket: DefineComponent<CompassPocketProps>;

export default CompassPocket;
export { CompassPocket };
