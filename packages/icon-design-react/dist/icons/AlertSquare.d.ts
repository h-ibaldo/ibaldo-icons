import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertSquare: ForwardRefExoticComponent<AlertSquareProps & RefAttributes<SVGSVGElement>>;

export default AlertSquare;
export { AlertSquare };
