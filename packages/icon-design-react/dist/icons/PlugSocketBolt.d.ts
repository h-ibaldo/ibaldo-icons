import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugSocketBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugSocketBolt: ForwardRefExoticComponent<PlugSocketBoltProps & RefAttributes<SVGSVGElement>>;

export default PlugSocketBolt;
export { PlugSocketBolt };
