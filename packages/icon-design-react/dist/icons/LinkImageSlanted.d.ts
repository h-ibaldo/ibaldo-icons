import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkImageSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkImageSlanted: ForwardRefExoticComponent<LinkImageSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkImageSlanted;
export { LinkImageSlanted };
