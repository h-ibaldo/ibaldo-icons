import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanSquareStack: ForwardRefExoticComponent<ScanSquareStackProps & RefAttributes<SVGSVGElement>>;

export default ScanSquareStack;
export { ScanSquareStack };
