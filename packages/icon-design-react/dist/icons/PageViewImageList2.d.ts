import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewImageList2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewImageList2: ForwardRefExoticComponent<PageViewImageList2Props & RefAttributes<SVGSVGElement>>;

export default PageViewImageList2;
export { PageViewImageList2 };
