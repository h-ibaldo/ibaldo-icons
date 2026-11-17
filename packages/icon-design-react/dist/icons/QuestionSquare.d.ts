import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionSquare: ForwardRefExoticComponent<QuestionSquareProps & RefAttributes<SVGSVGElement>>;

export default QuestionSquare;
export { QuestionSquare };
