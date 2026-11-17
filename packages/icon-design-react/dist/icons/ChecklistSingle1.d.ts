import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSingle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSingle1: ForwardRefExoticComponent<ChecklistSingle1Props & RefAttributes<SVGSVGElement>>;

export default ChecklistSingle1;
export { ChecklistSingle1 };
