import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSlanted: ForwardRefExoticComponent<LinkSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkSlanted;
export { LinkSlanted };
