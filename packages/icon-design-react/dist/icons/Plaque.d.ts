import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlaqueProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Plaque: ForwardRefExoticComponent<PlaqueProps & RefAttributes<SVGSVGElement>>;

export default Plaque;
export { Plaque };
