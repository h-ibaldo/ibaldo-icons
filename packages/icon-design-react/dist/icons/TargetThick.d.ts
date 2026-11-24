import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TargetThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TargetThick: ForwardRefExoticComponent<TargetThickProps & RefAttributes<SVGSVGElement>>;

export default TargetThick;
export { TargetThick };
