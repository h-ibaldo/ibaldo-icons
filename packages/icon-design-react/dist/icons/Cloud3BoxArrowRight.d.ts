import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BoxArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3BoxArrowRight: ForwardRefExoticComponent<Cloud3BoxArrowRightProps & RefAttributes<SVGSVGElement>>;

export default Cloud3BoxArrowRight;
export { Cloud3BoxArrowRight };
