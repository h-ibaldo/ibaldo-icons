import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckSlim: ForwardRefExoticComponent<LinkCheckSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckSlim;
export { LinkCheckSlim };
