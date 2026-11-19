import type { DefineComponent } from 'vue';

export interface CompassTicksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CompassTicks: DefineComponent<CompassTicksProps>;

export default CompassTicks;
export { CompassTicks };
