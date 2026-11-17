import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusNotched: ForwardRefExoticComponent<LinkMinusNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusNotched;
export { LinkMinusNotched };
