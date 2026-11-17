import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper9: ForwardRefExoticComponent<Newspaper9Props & RefAttributes<SVGSVGElement>>;

export default Newspaper9;
export { Newspaper9 };
