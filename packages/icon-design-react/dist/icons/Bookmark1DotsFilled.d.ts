import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1DotsFilledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1DotsFilled: ForwardRefExoticComponent<Bookmark1DotsFilledProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1DotsFilled;
export { Bookmark1DotsFilled };
