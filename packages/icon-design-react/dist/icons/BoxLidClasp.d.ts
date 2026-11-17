import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxLidClaspProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxLidClasp: ForwardRefExoticComponent<BoxLidClaspProps & RefAttributes<SVGSVGElement>>;

export default BoxLidClasp;
export { BoxLidClasp };
