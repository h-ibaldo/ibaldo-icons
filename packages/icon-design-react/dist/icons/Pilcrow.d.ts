import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PilcrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Pilcrow: ForwardRefExoticComponent<PilcrowProps & RefAttributes<SVGSVGElement>>;

export default Pilcrow;
export { Pilcrow };
