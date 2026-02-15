import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3ArrowDown: ForwardRefExoticComponent<Cloud3ArrowDownProps & RefAttributes<SVGSVGElement>>;

export default Cloud3ArrowDown;
export { Cloud3ArrowDown };
