import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCompact: ForwardRefExoticComponent<LinkCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkCompact;
export { LinkCompact };
