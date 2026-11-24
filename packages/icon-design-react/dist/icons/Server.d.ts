import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ServerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Server: ForwardRefExoticComponent<ServerProps & RefAttributes<SVGSVGElement>>;

export default Server;
export { Server };
