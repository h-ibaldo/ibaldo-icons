import type { DefineComponent } from 'vue';

export interface CloudSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSettings: DefineComponent<CloudSettingsProps>;

export default CloudSettings;
export { CloudSettings };
