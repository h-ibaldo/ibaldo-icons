import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenDoubleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenDoubleBar: ForwardRefExoticComponent<LinkBrokenDoubleBarProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenDoubleBar;
export { LinkBrokenDoubleBar };
