import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobilePowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobilePower: ForwardRefExoticComponent<MobilePowerProps & RefAttributes<SVGSVGElement>>;

export default MobilePower;
export { MobilePower };
