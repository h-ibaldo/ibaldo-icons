import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleCheckSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleCheckSlanted: ForwardRefExoticComponent<LinkCircleCheckSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleCheckSlanted;
export { LinkCircleCheckSlanted };
