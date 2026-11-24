import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRaysSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRaysSlim: ForwardRefExoticComponent<LinkRaysSlimProps & RefAttributes<SVGSVGElement>>;

export default LinkRaysSlim;
export { LinkRaysSlim };
