import type { DefineComponent } from 'vue';

export interface SpinnerRaysDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysDotted: DefineComponent<SpinnerRaysDottedProps>;

export default SpinnerRaysDotted;
export { SpinnerRaysDotted };
