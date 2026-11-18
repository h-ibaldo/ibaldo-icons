import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskFiveCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskFiveCircle: ForwardRefExoticComponent<AsteriskFiveCircleProps & RefAttributes<SVGSVGElement>>;

export default AsteriskFiveCircle;
export { AsteriskFiveCircle };
