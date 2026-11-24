import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunFacetedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunFaceted: ForwardRefExoticComponent<SunFacetedProps & RefAttributes<SVGSVGElement>>;

export default SunFaceted;
export { SunFaceted };
