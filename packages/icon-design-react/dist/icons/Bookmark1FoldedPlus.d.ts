import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1FoldedPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1FoldedPlus: ForwardRefExoticComponent<Bookmark1FoldedPlusProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1FoldedPlus;
export { Bookmark1FoldedPlus };
