import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3ThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Three: ForwardRefExoticComponent<Bookmark3ThreeProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Three;
export { Bookmark3Three };
