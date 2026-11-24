import type { DefineComponent } from 'vue';

export interface AwardSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AwardSquare: DefineComponent<AwardSquareProps>;

export default AwardSquare;
export { AwardSquare };
