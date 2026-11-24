import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbCapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbCap: ForwardRefExoticComponent<LightbulbCapProps & RefAttributes<SVGSVGElement>>;

export default LightbulbCap;
export { LightbulbCap };
