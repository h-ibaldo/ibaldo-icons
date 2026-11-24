import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCompact: ForwardRefExoticComponent<LinkCheckCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCompact;
export { LinkCheckCompact };
