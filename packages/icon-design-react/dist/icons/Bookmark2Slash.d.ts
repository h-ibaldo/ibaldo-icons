import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Slash: ForwardRefExoticComponent<Bookmark2SlashProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Slash;
export { Bookmark2Slash };
