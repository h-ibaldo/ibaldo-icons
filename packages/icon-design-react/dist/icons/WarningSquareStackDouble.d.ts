import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSquareStackDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSquareStackDouble: ForwardRefExoticComponent<WarningSquareStackDoubleProps & RefAttributes<SVGSVGElement>>;

export default WarningSquareStackDouble;
export { WarningSquareStackDouble };
