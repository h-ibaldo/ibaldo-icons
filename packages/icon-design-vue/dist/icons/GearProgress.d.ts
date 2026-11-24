import type { DefineComponent } from 'vue';

export interface GearProgressProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearProgress: DefineComponent<GearProgressProps>;

export default GearProgress;
export { GearProgress };
