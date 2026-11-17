import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSearch: ForwardRefExoticComponent<GearSearchProps & RefAttributes<SVGSVGElement>>;

export default GearSearch;
export { GearSearch };
