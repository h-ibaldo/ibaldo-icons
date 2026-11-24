import type { DefineComponent } from 'vue';

export interface BadgeQuestionNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeQuestionNotched: DefineComponent<BadgeQuestionNotchedProps>;

export default BadgeQuestionNotched;
export { BadgeQuestionNotched };
