import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugBoltThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugBoltThick: ForwardRefExoticComponent<PlugBoltThickProps & RefAttributes<SVGSVGElement>>;

export default PlugBoltThick;
export { PlugBoltThick };
