import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuSlanted: ForwardRefExoticComponent<LinkMenuSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuSlanted;
export { LinkMenuSlanted };
