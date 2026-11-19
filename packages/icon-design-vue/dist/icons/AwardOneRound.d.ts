import type { DefineComponent } from 'vue';

export interface AwardOneRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AwardOneRound: DefineComponent<AwardOneRoundProps>;

export default AwardOneRound;
export { AwardOneRound };
