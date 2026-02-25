import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectRandom12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectRandom12: ForwardRefExoticComponent<ConnectRandom12Props & RefAttributes<SVGSVGElement>>;

export default ConnectRandom12;
export { ConnectRandom12 };
