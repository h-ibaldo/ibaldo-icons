import type { DefineComponent } from 'vue';

export interface BadgeQuestionPointedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionPointed: DefineComponent<BadgeQuestionPointedProps>;

export default BadgeQuestionPointed;
export { BadgeQuestionPointed };
