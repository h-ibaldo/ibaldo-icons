import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewExtraLargeCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewExtraLargeCompact: ForwardRefExoticComponent<PageViewExtraLargeCompactProps & RefAttributes<SVGSVGElement>>;

export default PageViewExtraLargeCompact;
export { PageViewExtraLargeCompact };
