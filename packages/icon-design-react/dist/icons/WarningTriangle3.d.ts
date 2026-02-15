import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningTriangle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningTriangle3: ForwardRefExoticComponent<WarningTriangle3Props & RefAttributes<SVGSVGElement>>;

export default WarningTriangle3;
export { WarningTriangle3 };
