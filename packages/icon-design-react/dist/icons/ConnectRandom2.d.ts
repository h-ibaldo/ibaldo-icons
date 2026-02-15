import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectRandom2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectRandom2: ForwardRefExoticComponent<ConnectRandom2Props & RefAttributes<SVGSVGElement>>;

export default ConnectRandom2;
export { ConnectRandom2 };
