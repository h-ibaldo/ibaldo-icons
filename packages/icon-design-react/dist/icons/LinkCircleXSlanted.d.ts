import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleXSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleXSlanted: ForwardRefExoticComponent<LinkCircleXSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleXSlanted;
export { LinkCircleXSlanted };
