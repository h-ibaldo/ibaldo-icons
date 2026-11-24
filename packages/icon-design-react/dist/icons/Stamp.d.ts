import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StampProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Stamp: ForwardRefExoticComponent<StampProps & RefAttributes<SVGSVGElement>>;

export default Stamp;
export { Stamp };
