import type { DefineComponent } from 'vue';

export interface LightbulbBoltCapProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LightbulbBoltCap: DefineComponent<LightbulbBoltCapProps>;

export default LightbulbBoltCap;
export { LightbulbBoltCap };
