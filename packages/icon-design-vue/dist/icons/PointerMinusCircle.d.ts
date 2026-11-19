import type { DefineComponent } from 'vue';

export interface PointerMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerMinusCircle: DefineComponent<PointerMinusCircleProps>;

export default PointerMinusCircle;
export { PointerMinusCircle };
