import type { DefineComponent } from 'vue';

export interface RocketUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RocketUp: DefineComponent<RocketUpProps>;

export default RocketUp;
export { RocketUp };
