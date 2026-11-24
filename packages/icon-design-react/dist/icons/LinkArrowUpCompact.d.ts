import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpCompact: ForwardRefExoticComponent<LinkArrowUpCompactProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpCompact;
export { LinkArrowUpCompact };
