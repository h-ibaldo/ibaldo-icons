import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewAll: ForwardRefExoticComponent<PageViewAllProps & RefAttributes<SVGSVGElement>>;

export default PageViewAll;
export { PageViewAll };
