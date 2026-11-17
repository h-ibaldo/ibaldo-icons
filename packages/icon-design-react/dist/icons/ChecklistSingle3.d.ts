import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSingle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSingle3: ForwardRefExoticComponent<ChecklistSingle3Props & RefAttributes<SVGSVGElement>>;

export default ChecklistSingle3;
export { ChecklistSingle3 };
