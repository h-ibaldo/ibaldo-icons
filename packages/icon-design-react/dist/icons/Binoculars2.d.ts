import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Binoculars2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Binoculars2: ForwardRefExoticComponent<Binoculars2Props & RefAttributes<SVGSVGElement>>;

export default Binoculars2;
export { Binoculars2 };
