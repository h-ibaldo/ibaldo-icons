import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXNotched: ForwardRefExoticComponent<LinkXNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkXNotched;
export { LinkXNotched };
