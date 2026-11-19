import type { DefineComponent } from 'vue';

export interface BadgeQuestionBumpyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionBumpy: DefineComponent<BadgeQuestionBumpyProps>;

export default BadgeQuestionBumpy;
export { BadgeQuestionBumpy };
