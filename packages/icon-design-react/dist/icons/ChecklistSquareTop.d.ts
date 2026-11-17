import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareTop: ForwardRefExoticComponent<ChecklistSquareTopProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareTop;
export { ChecklistSquareTop };
