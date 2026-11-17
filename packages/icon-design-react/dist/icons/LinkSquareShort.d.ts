import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSquareShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSquareShort: ForwardRefExoticComponent<LinkSquareShortProps & RefAttributes<SVGSVGElement>>;

export default LinkSquareShort;
export { LinkSquareShort };
