import type { DefineComponent } from 'vue';

export interface AwardCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AwardCheckRound: DefineComponent<AwardCheckRoundProps>;

export default AwardCheckRound;
export { AwardCheckRound };
