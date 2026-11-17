import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSquareSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSquareSlanted: ForwardRefExoticComponent<LinkSquareSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkSquareSlanted;
export { LinkSquareSlanted };
