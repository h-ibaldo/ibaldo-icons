import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowBolt: ForwardRefExoticComponent<WindowBoltProps & RefAttributes<SVGSVGElement>>;

export default WindowBolt;
export { WindowBolt };
