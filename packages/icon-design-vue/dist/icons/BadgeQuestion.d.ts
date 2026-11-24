import type { DefineComponent } from 'vue';

export interface BadgeQuestionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestion: DefineComponent<BadgeQuestionProps>;

export default BadgeQuestion;
export { BadgeQuestion };
