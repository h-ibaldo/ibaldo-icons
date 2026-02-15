import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle3: ForwardRefExoticComponent<ConnectCircle3Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle3;
export { ConnectCircle3 };
