import type { DefineComponent } from 'vue';

export interface RocketBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RocketBare: DefineComponent<RocketBareProps>;

export default RocketBare;
export { RocketBare };
