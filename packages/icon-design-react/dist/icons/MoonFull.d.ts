import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonFullProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonFull: ForwardRefExoticComponent<MoonFullProps & RefAttributes<SVGSVGElement>>;

export default MoonFull;
export { MoonFull };
