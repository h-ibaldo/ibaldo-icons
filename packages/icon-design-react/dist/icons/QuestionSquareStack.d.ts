import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionSquareStack: ForwardRefExoticComponent<QuestionSquareStackProps & RefAttributes<SVGSVGElement>>;

export default QuestionSquareStack;
export { QuestionSquareStack };
