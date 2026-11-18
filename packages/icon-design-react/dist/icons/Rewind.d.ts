import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RewindProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Rewind: ForwardRefExoticComponent<RewindProps & RefAttributes<SVGSVGElement>>;

export default Rewind;
export { Rewind };
