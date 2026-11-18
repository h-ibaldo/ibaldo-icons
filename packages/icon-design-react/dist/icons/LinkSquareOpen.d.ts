import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSquareOpen: ForwardRefExoticComponent<LinkSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default LinkSquareOpen;
export { LinkSquareOpen };
