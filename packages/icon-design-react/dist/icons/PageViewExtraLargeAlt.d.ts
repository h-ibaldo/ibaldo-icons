import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewExtraLargeAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewExtraLargeAlt: ForwardRefExoticComponent<PageViewExtraLargeAltProps & RefAttributes<SVGSVGElement>>;

export default PageViewExtraLargeAlt;
export { PageViewExtraLargeAlt };
