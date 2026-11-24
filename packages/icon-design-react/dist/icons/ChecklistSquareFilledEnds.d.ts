import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareFilledEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareFilledEnds: ForwardRefExoticComponent<ChecklistSquareFilledEndsProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareFilledEnds;
export { ChecklistSquareFilledEnds };
