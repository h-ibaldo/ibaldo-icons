import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreen3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen3: ForwardRefExoticComponent<RotateScreen3Props & RefAttributes<SVGSVGElement>>;

export default RotateScreen3;
export { RotateScreen3 };
