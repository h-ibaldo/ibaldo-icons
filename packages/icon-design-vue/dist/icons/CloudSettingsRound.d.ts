import type { DefineComponent } from 'vue';

export interface CloudSettingsRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSettingsRound: DefineComponent<CloudSettingsRoundProps>;

export default CloudSettingsRound;
export { CloudSettingsRound };
