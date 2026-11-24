import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBandBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBandBar: ForwardRefExoticComponent<LinkEditBandBarProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBandBar;
export { LinkEditBandBar };
