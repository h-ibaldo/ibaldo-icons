import type { DefineComponent } from 'vue';

export interface JustifyRightFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const JustifyRightFlipped: DefineComponent<JustifyRightFlippedProps>;

export default JustifyRightFlipped;
export { JustifyRightFlipped };
