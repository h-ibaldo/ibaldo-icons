import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSquareStackAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSquareStackAlt: ForwardRefExoticComponent<WarningSquareStackAltProps & RefAttributes<SVGSVGElement>>;

export default WarningSquareStackAlt;
export { WarningSquareStackAlt };
