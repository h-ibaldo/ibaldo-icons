import type { DefineComponent } from 'vue';

export interface LightbulbShineCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbShineCap: DefineComponent<LightbulbShineCapProps>;

export default LightbulbShineCap;
export { LightbulbShineCap };
