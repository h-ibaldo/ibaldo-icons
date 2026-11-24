import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EjectDownSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EjectDownSquare: ForwardRefExoticComponent<EjectDownSquareProps & RefAttributes<SVGSVGElement>>;

export default EjectDownSquare;
export { EjectDownSquare };
