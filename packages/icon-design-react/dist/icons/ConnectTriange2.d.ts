import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectTriange2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectTriange2: ForwardRefExoticComponent<ConnectTriange2Props & RefAttributes<SVGSVGElement>>;

export default ConnectTriange2;
export { ConnectTriange2 };
