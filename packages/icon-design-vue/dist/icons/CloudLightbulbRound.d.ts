import type { DefineComponent } from 'vue';

export interface CloudLightbulbRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLightbulbRound: DefineComponent<CloudLightbulbRoundProps>;

export default CloudLightbulbRound;
export { CloudLightbulbRound };
