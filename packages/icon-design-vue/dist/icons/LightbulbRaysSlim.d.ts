import type { DefineComponent } from 'vue';

export interface LightbulbRaysSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbRaysSlim: DefineComponent<LightbulbRaysSlimProps>;

export default LightbulbRaysSlim;
export { LightbulbRaysSlim };
