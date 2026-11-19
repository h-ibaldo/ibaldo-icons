import type { DefineComponent } from 'vue';

export interface AlarmQuestionArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlarmQuestionArc: DefineComponent<AlarmQuestionArcProps>;

export default AlarmQuestionArc;
export { AlarmQuestionArc };
