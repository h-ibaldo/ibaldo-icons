import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1SquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Squared: ForwardRefExoticComponent<Bookmark1SquaredProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Squared;
export { Bookmark1Squared };
