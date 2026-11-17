import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareBottom: ForwardRefExoticComponent<ChecklistSquareBottomProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareBottom;
export { ChecklistSquareBottom };
