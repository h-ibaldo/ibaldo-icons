import type { DefineComponent } from 'vue';

export interface PlugThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PlugThick: DefineComponent<PlugThickProps>;

export default PlugThick;
export { PlugThick };
