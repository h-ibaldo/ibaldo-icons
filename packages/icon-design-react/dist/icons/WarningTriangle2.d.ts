import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle2: ForwardRefExoticComponent<WarningTriangle2Props & RefAttributes<SVGSVGElement>>;

export default WarningTriangle2;
export { WarningTriangle2 };
