import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ServerBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ServerBolt: ForwardRefExoticComponent<ServerBoltProps & RefAttributes<SVGSVGElement>>;

export default ServerBolt;
export { ServerBolt };
