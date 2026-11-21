import type { DefineComponent } from 'vue';

export interface PlugBoltThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugBoltThick: DefineComponent<PlugBoltThickProps>;

export default PlugBoltThick;
export { PlugBoltThick };
