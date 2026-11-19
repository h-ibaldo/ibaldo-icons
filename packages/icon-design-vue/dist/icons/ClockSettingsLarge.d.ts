import type { DefineComponent } from 'vue';

export interface ClockSettingsLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSettingsLarge: DefineComponent<ClockSettingsLargeProps>;

export default ClockSettingsLarge;
export { ClockSettingsLarge };
