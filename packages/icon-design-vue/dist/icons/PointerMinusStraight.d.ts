import type { DefineComponent } from 'vue';

export interface PointerMinusStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerMinusStraight: DefineComponent<PointerMinusStraightProps>;

export default PointerMinusStraight;
export { PointerMinusStraight };
