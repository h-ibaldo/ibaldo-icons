import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewBadgeAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewBadgeAlt: ForwardRefExoticComponent<PageViewBadgeAltProps & RefAttributes<SVGSVGElement>>;

export default PageViewBadgeAlt;
export { PageViewBadgeAlt };
