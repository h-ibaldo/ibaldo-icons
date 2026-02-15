import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3ViewEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3ViewEye: ForwardRefExoticComponent<Cloud3ViewEyeProps & RefAttributes<SVGSVGElement>>;

export default Cloud3ViewEye;
export { Cloud3ViewEye };
