import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpNotched: ForwardRefExoticComponent<LinkArrowUpNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpNotched;
export { LinkArrowUpNotched };
