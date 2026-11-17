import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionAnswerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionAnswer: ForwardRefExoticComponent<QuestionAnswerProps & RefAttributes<SVGSVGElement>>;

export default QuestionAnswer;
export { QuestionAnswer };
