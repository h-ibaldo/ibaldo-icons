import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareFilledAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareFilledAll: ForwardRefExoticComponent<ChecklistSquareFilledAllProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareFilledAll;
export { ChecklistSquareFilledAll };
