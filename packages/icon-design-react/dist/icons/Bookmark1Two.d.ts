import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1TwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Two: ForwardRefExoticComponent<Bookmark1TwoProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Two;
export { Bookmark1Two };
