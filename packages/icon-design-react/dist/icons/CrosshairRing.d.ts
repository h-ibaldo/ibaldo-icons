import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrosshairRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrosshairRing: ForwardRefExoticComponent<CrosshairRingProps & RefAttributes<SVGSVGElement>>;

export default CrosshairRing;
export { CrosshairRing };
