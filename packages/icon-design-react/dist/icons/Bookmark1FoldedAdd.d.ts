import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1FoldedAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1FoldedAdd: ForwardRefExoticComponent<Bookmark1FoldedAddProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1FoldedAdd;
export { Bookmark1FoldedAdd };
