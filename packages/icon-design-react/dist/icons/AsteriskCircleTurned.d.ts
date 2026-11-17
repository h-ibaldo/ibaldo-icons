import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskCircleTurnedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskCircleTurned: ForwardRefExoticComponent<AsteriskCircleTurnedProps & RefAttributes<SVGSVGElement>>;

export default AsteriskCircleTurned;
export { AsteriskCircleTurned };
