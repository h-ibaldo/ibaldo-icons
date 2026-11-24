import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMinusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMinusCorner: ForwardRefExoticComponent<CloudMinusCornerProps & RefAttributes<SVGSVGElement>>;

export default CloudMinusCorner;
export { CloudMinusCorner };
