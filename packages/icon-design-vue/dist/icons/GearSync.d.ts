import type { DefineComponent } from 'vue';

export interface GearSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSync: DefineComponent<GearSyncProps>;

export default GearSync;
export { GearSync };
