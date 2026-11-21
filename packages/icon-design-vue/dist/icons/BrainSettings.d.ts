import type { DefineComponent } from 'vue';

export interface BrainSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrainSettings: DefineComponent<BrainSettingsProps>;

export default BrainSettings;
export { BrainSettings };
