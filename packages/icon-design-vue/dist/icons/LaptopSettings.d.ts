import type { DefineComponent } from 'vue';

export interface LaptopSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopSettings: DefineComponent<LaptopSettingsProps>;

export default LaptopSettings;
export { LaptopSettings };
