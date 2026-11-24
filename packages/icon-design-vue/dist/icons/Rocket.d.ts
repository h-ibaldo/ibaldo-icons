import type { DefineComponent } from 'vue';

export interface RocketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Rocket: DefineComponent<RocketProps>;

export default Rocket;
export { Rocket };
