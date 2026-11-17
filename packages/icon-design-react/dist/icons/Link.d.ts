import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<SVGSVGElement>>;

export default Link;
export { Link };
