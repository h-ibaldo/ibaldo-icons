import type { DefineComponent } from 'vue';

export interface LightbulbBoltRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbBoltRound: DefineComponent<LightbulbBoltRoundProps>;

export default LightbulbBoltRound;
export { LightbulbBoltRound };
