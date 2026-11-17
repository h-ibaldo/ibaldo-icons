import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbRays: ForwardRefExoticComponent<LightbulbRaysProps & RefAttributes<SVGSVGElement>>;

export default LightbulbRays;
export { LightbulbRays };
