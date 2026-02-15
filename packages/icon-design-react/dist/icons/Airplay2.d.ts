import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Airplay2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Airplay2: ForwardRefExoticComponent<Airplay2Props & RefAttributes<SVGSVGElement>>;

export default Airplay2;
export { Airplay2 };
