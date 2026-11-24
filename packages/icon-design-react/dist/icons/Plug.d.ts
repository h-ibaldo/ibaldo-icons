import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Plug: ForwardRefExoticComponent<PlugProps & RefAttributes<SVGSVGElement>>;

export default Plug;
export { Plug };
