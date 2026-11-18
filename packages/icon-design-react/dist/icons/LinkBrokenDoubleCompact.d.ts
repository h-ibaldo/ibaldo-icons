import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenDoubleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenDoubleCompact: ForwardRefExoticComponent<LinkBrokenDoubleCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenDoubleCompact;
export { LinkBrokenDoubleCompact };
