import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleXShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleXShort: ForwardRefExoticComponent<LinkCircleXShortProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleXShort;
export { LinkCircleXShort };
