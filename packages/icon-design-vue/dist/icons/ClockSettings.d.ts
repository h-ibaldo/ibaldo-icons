import type { DefineComponent } from 'vue';

export interface ClockSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSettings: DefineComponent<ClockSettingsProps>;

export default ClockSettings;
export { ClockSettings };
