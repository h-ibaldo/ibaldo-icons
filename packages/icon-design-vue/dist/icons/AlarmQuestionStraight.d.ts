import type { DefineComponent } from 'vue';

export interface AlarmQuestionStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmQuestionStraight: DefineComponent<AlarmQuestionStraightProps>;

export default AlarmQuestionStraight;
export { AlarmQuestionStraight };
