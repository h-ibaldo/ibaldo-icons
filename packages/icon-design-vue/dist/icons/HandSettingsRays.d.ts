import type { DefineComponent } from 'vue';

export interface HandSettingsRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandSettingsRays: DefineComponent<HandSettingsRaysProps>;

export default HandSettingsRays;
export { HandSettingsRays };
