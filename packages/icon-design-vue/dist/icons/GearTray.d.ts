import type { DefineComponent } from 'vue';

export interface GearTrayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearTray: DefineComponent<GearTrayProps>;

export default GearTray;
export { GearTray };
