import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSquare: ForwardRefExoticComponent<WarningSquareProps & RefAttributes<SVGSVGElement>>;

export default WarningSquare;
export { WarningSquare };
