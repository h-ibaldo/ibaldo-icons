import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearTrayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearTray: ForwardRefExoticComponent<GearTrayProps & RefAttributes<SVGSVGElement>>;

export default GearTray;
export { GearTray };
