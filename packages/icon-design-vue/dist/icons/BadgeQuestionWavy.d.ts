import type { DefineComponent } from 'vue';

export interface BadgeQuestionWavyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionWavy: DefineComponent<BadgeQuestionWavyProps>;

export default BadgeQuestionWavy;
export { BadgeQuestionWavy };
