import type { DefineComponent } from 'vue';

export interface LaptopSettingsFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopSettingsFlat: DefineComponent<LaptopSettingsFlatProps>;

export default LaptopSettingsFlat;
export { LaptopSettingsFlat };
