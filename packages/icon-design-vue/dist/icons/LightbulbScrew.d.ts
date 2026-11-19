import type { DefineComponent } from 'vue';

export interface LightbulbScrewProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbScrew: DefineComponent<LightbulbScrewProps>;

export default LightbulbScrew;
export { LightbulbScrew };
