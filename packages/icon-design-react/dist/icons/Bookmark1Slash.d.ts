import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Slash: ForwardRefExoticComponent<Bookmark1SlashProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Slash;
export { Bookmark1Slash };
