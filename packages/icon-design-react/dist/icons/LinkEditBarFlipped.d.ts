import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkEditBarFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkEditBarFlipped: ForwardRefExoticComponent<LinkEditBarFlippedProps & RefAttributes<SVGSVGElement>>;

export default LinkEditBarFlipped;
export { LinkEditBarFlipped };
