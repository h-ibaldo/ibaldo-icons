import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBar: ForwardRefExoticComponent<LinkEditBarProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBar;
export { LinkEditBar };
