import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningSquareAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningSquareAlt: ForwardRefExoticComponent<WarningSquareAltProps & RefAttributes<SVGSVGElement>>;

export default WarningSquareAlt;
export { WarningSquareAlt };
