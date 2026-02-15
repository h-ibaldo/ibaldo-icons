import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ArrowUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3ArrowUpDown: ForwardRefExoticComponent<Cloud3ArrowUpDownProps & RefAttributes<SVGSVGElement>>;

export default Cloud3ArrowUpDown;
export { Cloud3ArrowUpDown };
