import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ServerBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ServerBars: ForwardRefExoticComponent<ServerBarsProps & RefAttributes<SVGSVGElement>>;

export default ServerBars;
export { ServerBars };
