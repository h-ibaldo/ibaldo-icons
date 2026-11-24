import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertSquareStackOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertSquareStackOverlap: ForwardRefExoticComponent<AlertSquareStackOverlapProps & RefAttributes<SVGSVGElement>>;

export default AlertSquareStackOverlap;
export { AlertSquareStackOverlap };
