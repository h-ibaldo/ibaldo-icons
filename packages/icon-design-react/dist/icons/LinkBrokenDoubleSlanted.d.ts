import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenDoubleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenDoubleSlanted: ForwardRefExoticComponent<LinkBrokenDoubleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenDoubleSlanted;
export { LinkBrokenDoubleSlanted };
