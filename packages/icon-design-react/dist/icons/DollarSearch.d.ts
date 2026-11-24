import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DollarSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DollarSearch: ForwardRefExoticComponent<DollarSearchProps & RefAttributes<SVGSVGElement>>;

export default DollarSearch;
export { DollarSearch };
