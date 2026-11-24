import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionCircle: ForwardRefExoticComponent<QuestionCircleProps & RefAttributes<SVGSVGElement>>;

export default QuestionCircle;
export { QuestionCircle };
