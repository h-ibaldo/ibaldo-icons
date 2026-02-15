import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewTiles2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewTiles2: ForwardRefExoticComponent<PageViewTiles2Props & RefAttributes<SVGSVGElement>>;

export default PageViewTiles2;
export { PageViewTiles2 };
