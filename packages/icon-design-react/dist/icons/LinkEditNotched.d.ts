import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditNotched: ForwardRefExoticComponent<LinkEditNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkEditNotched;
export { LinkEditNotched };
