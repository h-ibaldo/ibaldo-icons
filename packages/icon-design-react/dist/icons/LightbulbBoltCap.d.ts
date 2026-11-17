import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbBoltCapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbBoltCap: ForwardRefExoticComponent<LightbulbBoltCapProps & RefAttributes<SVGSVGElement>>;

export default LightbulbBoltCap;
export { LightbulbBoltCap };
