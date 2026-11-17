import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertSquareStack: ForwardRefExoticComponent<AlertSquareStackProps & RefAttributes<SVGSVGElement>>;

export default AlertSquareStack;
export { AlertSquareStack };
