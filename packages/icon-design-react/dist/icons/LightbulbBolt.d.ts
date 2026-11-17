import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbBolt: ForwardRefExoticComponent<LightbulbBoltProps & RefAttributes<SVGSVGElement>>;

export default LightbulbBolt;
export { LightbulbBolt };
