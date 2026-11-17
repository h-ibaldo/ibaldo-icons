import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSpiky: ForwardRefExoticComponent<SunSpikyProps & RefAttributes<SVGSVGElement>>;

export default SunSpiky;
export { SunSpiky };
