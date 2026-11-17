import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMinusCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMinusCornerTall: ForwardRefExoticComponent<CloudMinusCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudMinusCornerTall;
export { CloudMinusCornerTall };
