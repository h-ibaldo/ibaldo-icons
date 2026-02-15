import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1FoldedCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1FoldedCheck: ForwardRefExoticComponent<Bookmark1FoldedCheckProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1FoldedCheck;
export { Bookmark1FoldedCheck };
