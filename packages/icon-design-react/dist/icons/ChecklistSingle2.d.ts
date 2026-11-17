import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistSingle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistSingle2: ForwardRefExoticComponent<ChecklistSingle2Props & RefAttributes<SVGSVGElement>>;

export default ChecklistSingle2;
export { ChecklistSingle2 };
