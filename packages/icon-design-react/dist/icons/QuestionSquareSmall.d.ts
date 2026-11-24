import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionSquareSmall: ForwardRefExoticComponent<QuestionSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default QuestionSquareSmall;
export { QuestionSquareSmall };
