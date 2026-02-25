import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle42: ForwardRefExoticComponent<ConnectCircle42Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle42;
export { ConnectCircle42 };
