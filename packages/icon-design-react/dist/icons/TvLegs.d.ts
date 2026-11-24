import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TvLegsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TvLegs: ForwardRefExoticComponent<TvLegsProps & RefAttributes<SVGSVGElement>>;

export default TvLegs;
export { TvLegs };
