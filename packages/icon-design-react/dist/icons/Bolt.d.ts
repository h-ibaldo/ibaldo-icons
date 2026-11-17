import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bolt: ForwardRefExoticComponent<BoltProps & RefAttributes<SVGSVGElement>>;

export default Bolt;
export { Bolt };
