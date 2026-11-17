import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlertSquareStackSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlertSquareStackSide: ForwardRefExoticComponent<AlertSquareStackSideProps & RefAttributes<SVGSVGElement>>;

export default AlertSquareStackSide;
export { AlertSquareStackSide };
