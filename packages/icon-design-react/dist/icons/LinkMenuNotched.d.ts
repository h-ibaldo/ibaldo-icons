import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuNotched: ForwardRefExoticComponent<LinkMenuNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuNotched;
export { LinkMenuNotched };
