import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Airplay22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Airplay22: ForwardRefExoticComponent<Airplay22Props & RefAttributes<SVGSVGElement>>;

export default Airplay22;
export { Airplay22 };
