import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskCircle: ForwardRefExoticComponent<AsteriskCircleProps & RefAttributes<SVGSVGElement>>;

export default AsteriskCircle;
export { AsteriskCircle };
