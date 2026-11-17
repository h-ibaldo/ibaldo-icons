import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSquareStack: ForwardRefExoticComponent<WarningSquareStackProps & RefAttributes<SVGSVGElement>>;

export default WarningSquareStack;
export { WarningSquareStack };
