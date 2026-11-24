import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutLargeImageArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutLargeImageArc: ForwardRefExoticComponent<LayoutLargeImageArcProps & RefAttributes<SVGSVGElement>>;

export default LayoutLargeImageArc;
export { LayoutLargeImageArc };
