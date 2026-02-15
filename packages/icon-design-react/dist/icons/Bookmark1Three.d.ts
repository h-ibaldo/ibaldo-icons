import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1ThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Three: ForwardRefExoticComponent<Bookmark1ThreeProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Three;
export { Bookmark1Three };
