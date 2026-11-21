import type { DefineComponent } from 'vue';

export interface PlugBoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugBolt: DefineComponent<PlugBoltProps>;

export default PlugBolt;
export { PlugBolt };
