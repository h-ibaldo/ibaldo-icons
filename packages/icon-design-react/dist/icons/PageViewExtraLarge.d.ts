import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewExtraLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewExtraLarge: ForwardRefExoticComponent<PageViewExtraLargeProps & RefAttributes<SVGSVGElement>>;

export default PageViewExtraLarge;
export { PageViewExtraLarge };
