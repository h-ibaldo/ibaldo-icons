import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Alert: ForwardRefExoticComponent<Cloud2AlertProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Alert;
export { Cloud2Alert };
