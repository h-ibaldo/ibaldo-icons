import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugBolt: ForwardRefExoticComponent<PlugBoltProps & RefAttributes<SVGSVGElement>>;

export default PlugBolt;
export { PlugBolt };
