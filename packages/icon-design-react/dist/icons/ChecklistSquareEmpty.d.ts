import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSquareEmptyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSquareEmpty: ForwardRefExoticComponent<ChecklistSquareEmptyProps & RefAttributes<SVGSVGElement>>;

export default ChecklistSquareEmpty;
export { ChecklistSquareEmpty };
