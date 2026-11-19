import type { DefineComponent } from 'vue';

export interface LightbulbRaysCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbRaysCap: DefineComponent<LightbulbRaysCapProps>;

export default LightbulbRaysCap;
export { LightbulbRaysCap };
