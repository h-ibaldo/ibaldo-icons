import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareFilledTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareFilledTop: ForwardRefExoticComponent<ChecklistSquareFilledTopProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareFilledTop;
export { ChecklistSquareFilledTop };
