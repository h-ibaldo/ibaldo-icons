import type { DefineComponent } from 'vue';

export interface LightbulbFilamentCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentCap: DefineComponent<LightbulbFilamentCapProps>;

export default LightbulbFilamentCap;
export { LightbulbFilamentCap };
