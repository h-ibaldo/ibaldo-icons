import type { DefineComponent } from 'vue';

export interface CastRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CastRound: DefineComponent<CastRoundProps>;

export default CastRound;
export { CastRound };
