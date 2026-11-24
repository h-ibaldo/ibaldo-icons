import type { DefineComponent } from 'vue';

export interface PlugSocketBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugSocketBolt: DefineComponent<PlugSocketBoltProps>;

export default PlugSocketBolt;
export { PlugSocketBolt };
