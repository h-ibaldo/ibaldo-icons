import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBar: ForwardRefExoticComponent<LinkBarProps & RefAttributes<SVGSVGElement>>;

export default LinkBar;
export { LinkBar };
