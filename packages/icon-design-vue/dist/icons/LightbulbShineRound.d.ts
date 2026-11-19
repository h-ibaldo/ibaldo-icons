import type { DefineComponent } from 'vue';

export interface LightbulbShineRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbShineRound: DefineComponent<LightbulbShineRoundProps>;

export default LightbulbShineRound;
export { LightbulbShineRound };
