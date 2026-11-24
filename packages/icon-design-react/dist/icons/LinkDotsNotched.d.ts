import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsNotched: ForwardRefExoticComponent<LinkDotsNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsNotched;
export { LinkDotsNotched };
