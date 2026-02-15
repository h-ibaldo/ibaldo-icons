import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectRandom1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectRandom1: ForwardRefExoticComponent<ConnectRandom1Props & RefAttributes<SVGSVGElement>>;

export default ConnectRandom1;
export { ConnectRandom1 };
