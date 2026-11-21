import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TargetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Target: ForwardRefExoticComponent<TargetProps & RefAttributes<SVGSVGElement>>;

export default Target;
export { Target };
