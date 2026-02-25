import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Binoculars32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Binoculars32: ForwardRefExoticComponent<Binoculars32Props & RefAttributes<SVGSVGElement>>;

export default Binoculars32;
export { Binoculars32 };
