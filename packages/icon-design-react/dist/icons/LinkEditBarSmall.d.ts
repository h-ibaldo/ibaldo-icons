import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBarSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBarSmall: ForwardRefExoticComponent<LinkEditBarSmallProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBarSmall;
export { LinkEditBarSmall };
