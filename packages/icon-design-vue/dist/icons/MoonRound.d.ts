import type { DefineComponent } from 'vue';

export interface MoonRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MoonRound: DefineComponent<MoonRoundProps>;

export default MoonRound;
export { MoonRound };
