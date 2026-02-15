import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3TwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Two: ForwardRefExoticComponent<Bookmark3TwoProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Two;
export { Bookmark3Two };
