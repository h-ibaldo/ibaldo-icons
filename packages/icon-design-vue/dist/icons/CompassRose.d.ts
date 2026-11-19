import type { DefineComponent } from 'vue';

export interface CompassRoseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassRose: DefineComponent<CompassRoseProps>;

export default CompassRose;
export { CompassRose };
