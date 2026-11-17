import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearHexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearHex: ForwardRefExoticComponent<GearHexProps & RefAttributes<SVGSVGElement>>;

export default GearHex;
export { GearHex };
