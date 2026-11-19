import type { DefineComponent } from 'vue';

export interface CompassPivotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassPivot: DefineComponent<CompassPivotProps>;

export default CompassPivot;
export { CompassPivot };
