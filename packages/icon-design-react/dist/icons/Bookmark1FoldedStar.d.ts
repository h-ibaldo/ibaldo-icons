import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1FoldedStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1FoldedStar: ForwardRefExoticComponent<Bookmark1FoldedStarProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1FoldedStar;
export { Bookmark1FoldedStar };
