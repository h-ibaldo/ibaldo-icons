import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugThick: ForwardRefExoticComponent<PlugThickProps & RefAttributes<SVGSVGElement>>;

export default PlugThick;
export { PlugThick };
