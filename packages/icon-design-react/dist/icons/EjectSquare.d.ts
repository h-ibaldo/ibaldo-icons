import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectSquare: ForwardRefExoticComponent<EjectSquareProps & RefAttributes<SVGSVGElement>>;

export default EjectSquare;
export { EjectSquare };
