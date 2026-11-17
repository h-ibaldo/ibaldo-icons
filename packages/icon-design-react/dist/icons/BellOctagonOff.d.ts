import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellOctagonOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellOctagonOff: ForwardRefExoticComponent<BellOctagonOffProps & RefAttributes<SVGSVGElement>>;

export default BellOctagonOff;
export { BellOctagonOff };
