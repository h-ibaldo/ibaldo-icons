import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSlim: ForwardRefExoticComponent<LinkSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkSlim;
export { LinkSlim };
