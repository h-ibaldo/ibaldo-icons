import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleShort: ForwardRefExoticComponent<LinkCircleShortProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleShort;
export { LinkCircleShort };
