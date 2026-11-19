import type { DefineComponent } from 'vue';

export interface LightbulbCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbCap: DefineComponent<LightbulbCapProps>;

export default LightbulbCap;
export { LightbulbCap };
