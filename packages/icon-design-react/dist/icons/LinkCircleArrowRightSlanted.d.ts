import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowRightSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowRightSlanted: ForwardRefExoticComponent<LinkCircleArrowRightSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowRightSlanted;
export { LinkCircleArrowRightSlanted };
