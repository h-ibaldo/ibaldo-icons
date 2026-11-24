import type { DefineComponent } from 'vue';

export interface LightbulbShineScrewProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbShineScrew: DefineComponent<LightbulbShineScrewProps>;

export default LightbulbShineScrew;
export { LightbulbShineScrew };
