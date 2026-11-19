import type { DefineComponent } from 'vue';

export interface CylinderClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CylinderClock: DefineComponent<CylinderClockProps>;

export default CylinderClock;
export { CylinderClock };
