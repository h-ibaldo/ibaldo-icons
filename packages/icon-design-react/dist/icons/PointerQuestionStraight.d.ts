import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerQuestionStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerQuestionStraight: ForwardRefExoticComponent<PointerQuestionStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerQuestionStraight;
export { PointerQuestionStraight };
