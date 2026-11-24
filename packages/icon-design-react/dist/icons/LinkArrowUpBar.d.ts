import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpBar: ForwardRefExoticComponent<LinkArrowUpBarProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpBar;
export { LinkArrowUpBar };
