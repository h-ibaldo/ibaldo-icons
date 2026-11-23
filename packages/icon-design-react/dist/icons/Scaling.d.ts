import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScalingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scaling: ForwardRefExoticComponent<ScalingProps & RefAttributes<SVGSVGElement>>;

export default Scaling;
export { Scaling };
