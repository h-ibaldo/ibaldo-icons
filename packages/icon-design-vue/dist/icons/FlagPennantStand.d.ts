import type { DefineComponent } from 'vue';

export interface FlagPennantStandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagPennantStand: DefineComponent<FlagPennantStandProps>;

export default FlagPennantStand;
export { FlagPennantStand };
