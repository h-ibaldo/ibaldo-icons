import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3ArrowRight: ForwardRefExoticComponent<Cloud3ArrowRightProps & RefAttributes<SVGSVGElement>>;

export default Cloud3ArrowRight;
export { Cloud3ArrowRight };
