import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionAnswerOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionAnswerOverlap: ForwardRefExoticComponent<QuestionAnswerOverlapProps & RefAttributes<SVGSVGElement>>;

export default QuestionAnswerOverlap;
export { QuestionAnswerOverlap };
