import type { DefineComponent } from 'vue';

export interface CloudLightbulbTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudLightbulbTall: DefineComponent<CloudLightbulbTallProps>;

export default CloudLightbulbTall;
export { CloudLightbulbTall };
