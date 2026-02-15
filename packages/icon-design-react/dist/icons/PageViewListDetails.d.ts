import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewListDetailsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewListDetails: ForwardRefExoticComponent<PageViewListDetailsProps & RefAttributes<SVGSVGElement>>;

export default PageViewListDetails;
export { PageViewListDetails };
