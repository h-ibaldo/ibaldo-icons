import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewImageListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewImageList: ForwardRefExoticComponent<PageViewImageListProps & RefAttributes<SVGSVGElement>>;

export default PageViewImageList;
export { PageViewImageList };
