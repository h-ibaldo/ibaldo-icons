import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkNotched: ForwardRefExoticComponent<LinkNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkNotched;
export { LinkNotched };
