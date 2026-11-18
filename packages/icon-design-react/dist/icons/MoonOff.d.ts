import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonOff: ForwardRefExoticComponent<MoonOffProps & RefAttributes<SVGSVGElement>>;

export default MoonOff;
export { MoonOff };
