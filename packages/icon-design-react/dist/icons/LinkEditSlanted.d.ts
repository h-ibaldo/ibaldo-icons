import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditSlanted: ForwardRefExoticComponent<LinkEditSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkEditSlanted;
export { LinkEditSlanted };
