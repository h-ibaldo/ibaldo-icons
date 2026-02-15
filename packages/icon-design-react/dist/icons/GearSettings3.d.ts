import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSettings3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSettings3: ForwardRefExoticComponent<GearSettings3Props & RefAttributes<SVGSVGElement>>;

export default GearSettings3;
export { GearSettings3 };
