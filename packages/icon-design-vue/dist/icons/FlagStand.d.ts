import type { DefineComponent } from 'vue';

export interface FlagStandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagStand: DefineComponent<FlagStandProps>;

export default FlagStand;
export { FlagStand };
