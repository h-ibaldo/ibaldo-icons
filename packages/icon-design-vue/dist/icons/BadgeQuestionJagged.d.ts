import type { DefineComponent } from 'vue';

export interface BadgeQuestionJaggedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionJagged: DefineComponent<BadgeQuestionJaggedProps>;

export default BadgeQuestionJagged;
export { BadgeQuestionJagged };
