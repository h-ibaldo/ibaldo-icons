import type { DefineComponent } from 'vue';

export interface LightbulbRaysProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbRays: DefineComponent<LightbulbRaysProps>;

export default LightbulbRays;
export { LightbulbRays };
