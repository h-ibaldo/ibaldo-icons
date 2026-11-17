import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusSlim: ForwardRefExoticComponent<LinkMinusSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusSlim;
export { LinkMinusSlim };
