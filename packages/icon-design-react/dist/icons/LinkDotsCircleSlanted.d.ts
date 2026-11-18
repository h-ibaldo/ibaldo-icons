import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsCircleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsCircleSlanted: ForwardRefExoticComponent<LinkDotsCircleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsCircleSlanted;
export { LinkDotsCircleSlanted };
