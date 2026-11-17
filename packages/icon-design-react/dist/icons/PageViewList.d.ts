import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewList: ForwardRefExoticComponent<PageViewListProps & RefAttributes<SVGSVGElement>>;

export default PageViewList;
export { PageViewList };
