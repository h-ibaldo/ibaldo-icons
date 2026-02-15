import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewListThumbnailsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewListThumbnails: ForwardRefExoticComponent<PageViewListThumbnailsProps & RefAttributes<SVGSVGElement>>;

export default PageViewListThumbnails;
export { PageViewListThumbnails };
