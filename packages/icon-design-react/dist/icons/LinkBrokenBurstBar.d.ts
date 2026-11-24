import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstBar: ForwardRefExoticComponent<LinkBrokenBurstBarProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstBar;
export { LinkBrokenBurstBar };
