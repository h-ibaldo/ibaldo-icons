import type { DefineComponent } from 'vue';

export interface MinimizeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Minimize: DefineComponent<MinimizeProps>;

export default Minimize;
export { Minimize };
