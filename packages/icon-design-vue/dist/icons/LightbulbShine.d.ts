import type { DefineComponent } from 'vue';

export interface LightbulbShineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbShine: DefineComponent<LightbulbShineProps>;

export default LightbulbShine;
export { LightbulbShine };
