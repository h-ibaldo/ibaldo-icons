import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewExtraLargeGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewExtraLargeGrid: ForwardRefExoticComponent<PageViewExtraLargeGridProps & RefAttributes<SVGSVGElement>>;

export default PageViewExtraLargeGrid;
export { PageViewExtraLargeGrid };
