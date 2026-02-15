import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlaqueCategory2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlaqueCategory2: ForwardRefExoticComponent<PlaqueCategory2Props & RefAttributes<SVGSVGElement>>;

export default PlaqueCategory2;
export { PlaqueCategory2 };
