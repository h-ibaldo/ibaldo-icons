import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareTopTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareTopTwo: ForwardRefExoticComponent<ChecklistSquareTopTwoProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareTopTwo;
export { ChecklistSquareTopTwo };
