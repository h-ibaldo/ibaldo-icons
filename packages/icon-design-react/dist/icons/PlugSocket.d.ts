import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugSocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugSocket: ForwardRefExoticComponent<PlugSocketProps & RefAttributes<SVGSVGElement>>;

export default PlugSocket;
export { PlugSocket };
