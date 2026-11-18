import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideSquareCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DivideSquareCompact: ForwardRefExoticComponent<DivideSquareCompactProps & RefAttributes<SVGSVGElement>>;

export default DivideSquareCompact;
export { DivideSquareCompact };
