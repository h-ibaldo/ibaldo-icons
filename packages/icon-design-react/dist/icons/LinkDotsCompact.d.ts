import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCompact: ForwardRefExoticComponent<LinkDotsCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCompact;
export { LinkDotsCompact };
