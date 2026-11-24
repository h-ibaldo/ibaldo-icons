import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsFlat: ForwardRefExoticComponent<LinkDotsFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsFlat;
export { LinkDotsFlat };
