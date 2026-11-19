import type { DefineComponent } from 'vue';

export interface CloudLightbulbProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLightbulb: DefineComponent<CloudLightbulbProps>;

export default CloudLightbulb;
export { CloudLightbulb };
