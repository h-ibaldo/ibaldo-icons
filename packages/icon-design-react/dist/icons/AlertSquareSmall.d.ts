import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertSquareSmall: ForwardRefExoticComponent<AlertSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default AlertSquareSmall;
export { AlertSquareSmall };
