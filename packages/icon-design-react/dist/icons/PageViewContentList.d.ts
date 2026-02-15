import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewContentListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewContentList: ForwardRefExoticComponent<PageViewContentListProps & RefAttributes<SVGSVGElement>>;

export default PageViewContentList;
export { PageViewContentList };
