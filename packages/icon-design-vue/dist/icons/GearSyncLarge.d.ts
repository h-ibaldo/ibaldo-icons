import type { DefineComponent } from 'vue';

export interface GearSyncLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSyncLarge: DefineComponent<GearSyncLargeProps>;

export default GearSyncLarge;
export { GearSyncLarge };
