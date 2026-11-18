import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleSlanted: ForwardRefExoticComponent<LinkCircleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleSlanted;
export { LinkCircleSlanted };
