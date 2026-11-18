import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsSlim: ForwardRefExoticComponent<LinkDotsSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsSlim;
export { LinkDotsSlim };
