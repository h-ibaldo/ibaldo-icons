import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangle12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle12: ForwardRefExoticComponent<WarningTriangle12Props & RefAttributes<SVGSVGElement>>;

export default WarningTriangle12;
export { WarningTriangle12 };
