import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreen2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen2: ForwardRefExoticComponent<RotateScreen2Props & RefAttributes<SVGSVGElement>>;

export default RotateScreen2;
export { RotateScreen2 };
