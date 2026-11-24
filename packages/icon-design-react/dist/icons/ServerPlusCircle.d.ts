import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ServerPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ServerPlusCircle: ForwardRefExoticComponent<ServerPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default ServerPlusCircle;
export { ServerPlusCircle };
