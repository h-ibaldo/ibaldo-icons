import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditSlim: ForwardRefExoticComponent<LinkEditSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkEditSlim;
export { LinkEditSlim };
