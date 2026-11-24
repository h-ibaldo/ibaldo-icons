import type { DefineComponent } from 'vue';

export interface CloudSettingsTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSettingsTall: DefineComponent<CloudSettingsTallProps>;

export default CloudSettingsTall;
export { CloudSettingsTall };
