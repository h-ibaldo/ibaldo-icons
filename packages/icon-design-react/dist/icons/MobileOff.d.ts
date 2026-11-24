import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileOff: ForwardRefExoticComponent<MobileOffProps & RefAttributes<SVGSVGElement>>;

export default MobileOff;
export { MobileOff };
