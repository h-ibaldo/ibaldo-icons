import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Airplay12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Airplay12: ForwardRefExoticComponent<Airplay12Props & RefAttributes<SVGSVGElement>>;

export default Airplay12;
export { Airplay12 };
