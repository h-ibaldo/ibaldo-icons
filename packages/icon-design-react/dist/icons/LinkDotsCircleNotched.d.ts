import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleNotched: ForwardRefExoticComponent<LinkDotsCircleNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleNotched;
export { LinkDotsCircleNotched };
