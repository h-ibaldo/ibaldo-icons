import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpSlim: ForwardRefExoticComponent<LinkArrowUpSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpSlim;
export { LinkArrowUpSlim };
