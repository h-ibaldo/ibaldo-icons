import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionSquareStackOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionSquareStackOverlap: ForwardRefExoticComponent<QuestionSquareStackOverlapProps & RefAttributes<SVGSVGElement>>;

export default QuestionSquareStackOverlap;
export { QuestionSquareStackOverlap };
