import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistCircleTopTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChecklistCircleTopTwo: ForwardRefExoticComponent<ChecklistCircleTopTwoProps & RefAttributes<SVGSVGElement>>;

export default ChecklistCircleTopTwo;
export { ChecklistCircleTopTwo };
