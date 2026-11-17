import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistCircleTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistCircleTop: ForwardRefExoticComponent<ChecklistCircleTopProps & RefAttributes<SVGSVGElement>>;

export default ChecklistCircleTop;
export { ChecklistCircleTop };
