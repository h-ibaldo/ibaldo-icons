import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXCompact: ForwardRefExoticComponent<LinkXCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkXCompact;
export { LinkXCompact };
