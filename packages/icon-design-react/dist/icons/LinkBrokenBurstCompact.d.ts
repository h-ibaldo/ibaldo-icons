import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstCompact: ForwardRefExoticComponent<LinkBrokenBurstCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstCompact;
export { LinkBrokenBurstCompact };
