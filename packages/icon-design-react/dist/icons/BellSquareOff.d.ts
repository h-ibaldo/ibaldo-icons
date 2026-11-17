import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquareOff: ForwardRefExoticComponent<BellSquareOffProps & RefAttributes<SVGSVGElement>>;

export default BellSquareOff;
export { BellSquareOff };
