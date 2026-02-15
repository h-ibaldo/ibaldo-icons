import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Slash: ForwardRefExoticComponent<Bookmark3SlashProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Slash;
export { Bookmark3Slash };
