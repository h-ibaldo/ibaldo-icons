import type { DefineComponent } from 'vue';

export interface LightbulbBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbBolt: DefineComponent<LightbulbBoltProps>;

export default LightbulbBolt;
export { LightbulbBolt };
