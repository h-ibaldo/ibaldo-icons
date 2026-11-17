import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbRaysSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbRaysSlim: ForwardRefExoticComponent<LightbulbRaysSlimProps & RefAttributes<SVGSVGElement>>;

export default LightbulbRaysSlim;
export { LightbulbRaysSlim };
