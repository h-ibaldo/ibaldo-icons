import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewTiles1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewTiles1: ForwardRefExoticComponent<PageViewTiles1Props & RefAttributes<SVGSVGElement>>;

export default PageViewTiles1;
export { PageViewTiles1 };
