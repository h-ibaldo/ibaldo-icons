import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBandNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBandNotched: ForwardRefExoticComponent<LinkEditBandNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBandNotched;
export { LinkEditBandNotched };
