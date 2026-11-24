import type { DefineComponent } from 'vue';

export interface BinocularsCompactRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsCompactRound: DefineComponent<BinocularsCompactRoundProps>;

export default BinocularsCompactRound;
export { BinocularsCompactRound };
