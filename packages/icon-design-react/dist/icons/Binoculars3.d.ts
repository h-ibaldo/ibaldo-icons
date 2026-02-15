import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Binoculars3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Binoculars3: ForwardRefExoticComponent<Binoculars3Props & RefAttributes<SVGSVGElement>>;

export default Binoculars3;
export { Binoculars3 };
