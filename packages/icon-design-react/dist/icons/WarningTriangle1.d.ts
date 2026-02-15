import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle1: ForwardRefExoticComponent<WarningTriangle1Props & RefAttributes<SVGSVGElement>>;

export default WarningTriangle1;
export { WarningTriangle1 };
