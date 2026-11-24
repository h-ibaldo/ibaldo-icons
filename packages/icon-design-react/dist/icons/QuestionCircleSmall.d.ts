import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionCircleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionCircleSmall: ForwardRefExoticComponent<QuestionCircleSmallProps & RefAttributes<SVGSVGElement>>;

export default QuestionCircleSmall;
export { QuestionCircleSmall };
