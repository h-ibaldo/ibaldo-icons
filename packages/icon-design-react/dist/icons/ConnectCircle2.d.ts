import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle2: ForwardRefExoticComponent<ConnectCircle2Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle2;
export { ConnectCircle2 };
