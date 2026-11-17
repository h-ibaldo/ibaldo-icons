import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplayTall: ForwardRefExoticComponent<AirplayTallProps & RefAttributes<SVGSVGElement>>;

export default AirplayTall;
export { AirplayTall };
