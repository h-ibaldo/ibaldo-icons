import type { DefineComponent } from 'vue';

export interface LightbulbFilamentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbFilament: DefineComponent<LightbulbFilamentProps>;

export default LightbulbFilament;
export { LightbulbFilament };
