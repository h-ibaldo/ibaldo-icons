import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusSlim: ForwardRefExoticComponent<LinkPlusSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusSlim;
export { LinkPlusSlim };
