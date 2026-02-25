import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangle32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle32: ForwardRefExoticComponent<WarningTriangle32Props & RefAttributes<SVGSVGElement>>;

export default WarningTriangle32;
export { WarningTriangle32 };
