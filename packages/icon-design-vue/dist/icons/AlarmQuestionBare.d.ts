import type { DefineComponent } from 'vue';

export interface AlarmQuestionBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmQuestionBare: DefineComponent<AlarmQuestionBareProps>;

export default AlarmQuestionBare;
export { AlarmQuestionBare };
