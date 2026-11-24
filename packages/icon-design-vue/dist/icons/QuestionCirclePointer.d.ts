import type { DefineComponent } from 'vue';

export interface QuestionCirclePointerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuestionCirclePointer: DefineComponent<QuestionCirclePointerProps>;

export default QuestionCirclePointer;
export { QuestionCirclePointer };
