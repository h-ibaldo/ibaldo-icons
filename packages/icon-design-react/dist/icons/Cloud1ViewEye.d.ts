import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1ViewEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1ViewEye: ForwardRefExoticComponent<Cloud1ViewEyeProps & RefAttributes<SVGSVGElement>>;

export default Cloud1ViewEye;
export { Cloud1ViewEye };
