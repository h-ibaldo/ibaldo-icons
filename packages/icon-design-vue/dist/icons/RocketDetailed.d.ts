import type { DefineComponent } from 'vue';

export interface RocketDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RocketDetailed: DefineComponent<RocketDetailedProps>;

export default RocketDetailed;
export { RocketDetailed };
