import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCompact: ForwardRefExoticComponent<LinkMinusCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCompact;
export { LinkMinusCompact };
