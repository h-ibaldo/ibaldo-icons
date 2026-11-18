import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBandSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBandSlanted: ForwardRefExoticComponent<LinkEditBandSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBandSlanted;
export { LinkEditBandSlanted };
