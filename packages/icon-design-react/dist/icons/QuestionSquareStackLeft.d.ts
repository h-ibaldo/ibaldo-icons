import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionSquareStackLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionSquareStackLeft: ForwardRefExoticComponent<QuestionSquareStackLeftProps & RefAttributes<SVGSVGElement>>;

export default QuestionSquareStackLeft;
export { QuestionSquareStackLeft };
