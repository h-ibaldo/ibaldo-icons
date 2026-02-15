import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreen4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen4: ForwardRefExoticComponent<RotateScreen4Props & RefAttributes<SVGSVGElement>>;

export default RotateScreen4;
export { RotateScreen4 };
