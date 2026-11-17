import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusCircleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusCircleNotched: ForwardRefExoticComponent<LinkMinusCircleNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusCircleNotched;
export { LinkMinusCircleNotched };
