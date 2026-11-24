import type { DefineComponent } from 'vue';

export interface AlarmQuestionProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmQuestion: DefineComponent<AlarmQuestionProps>;

export default AlarmQuestion;
export { AlarmQuestion };
