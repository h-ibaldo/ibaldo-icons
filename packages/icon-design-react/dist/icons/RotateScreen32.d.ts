import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreen32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen32: ForwardRefExoticComponent<RotateScreen32Props & RefAttributes<SVGSVGElement>>;

export default RotateScreen32;
export { RotateScreen32 };
