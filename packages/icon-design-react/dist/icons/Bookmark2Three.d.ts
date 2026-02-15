import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2ThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Three: ForwardRefExoticComponent<Bookmark2ThreeProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Three;
export { Bookmark2Three };
