import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreen1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen1: ForwardRefExoticComponent<RotateScreen1Props & RefAttributes<SVGSVGElement>>;

export default RotateScreen1;
export { RotateScreen1 };
