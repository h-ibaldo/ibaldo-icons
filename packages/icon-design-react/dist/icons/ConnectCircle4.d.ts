import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle4: ForwardRefExoticComponent<ConnectCircle4Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle4;
export { ConnectCircle4 };
