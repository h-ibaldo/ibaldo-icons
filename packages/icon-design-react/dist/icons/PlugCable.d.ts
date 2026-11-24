import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlugCableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlugCable: ForwardRefExoticComponent<PlugCableProps & RefAttributes<SVGSVGElement>>;

export default PlugCable;
export { PlugCable };
