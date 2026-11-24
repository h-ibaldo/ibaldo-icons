import type { DefineComponent } from 'vue';

export interface BadgeQuestionPetalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionPetal: DefineComponent<BadgeQuestionPetalProps>;

export default BadgeQuestionPetal;
export { BadgeQuestionPetal };
