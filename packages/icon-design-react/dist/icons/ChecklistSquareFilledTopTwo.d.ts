import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareFilledTopTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareFilledTopTwo: ForwardRefExoticComponent<ChecklistSquareFilledTopTwoProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareFilledTopTwo;
export { ChecklistSquareFilledTopTwo };
