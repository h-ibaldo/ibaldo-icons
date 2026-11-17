import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewBadgeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewBadge: ForwardRefExoticComponent<PageViewBadgeProps & RefAttributes<SVGSVGElement>>;

export default PageViewBadge;
export { PageViewBadge };
