import type { DefineComponent } from 'vue';

export interface FlagPennantProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FlagPennant: DefineComponent<FlagPennantProps>;

export default FlagPennant;
export { FlagPennant };
