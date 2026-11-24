import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TvProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tv: ForwardRefExoticComponent<TvProps & RefAttributes<SVGSVGElement>>;

export default Tv;
export { Tv };
