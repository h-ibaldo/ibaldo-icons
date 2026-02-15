import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Airplay1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Airplay1: ForwardRefExoticComponent<Airplay1Props & RefAttributes<SVGSVGElement>>;

export default Airplay1;
export { Airplay1 };
