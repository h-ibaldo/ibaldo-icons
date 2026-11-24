import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuSlim: ForwardRefExoticComponent<LinkMenuSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuSlim;
export { LinkMenuSlim };
