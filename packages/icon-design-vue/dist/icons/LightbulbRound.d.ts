import type { DefineComponent } from 'vue';

export interface LightbulbRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbRound: DefineComponent<LightbulbRoundProps>;

export default LightbulbRound;
export { LightbulbRound };
