import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewSingleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewSingle: ForwardRefExoticComponent<PageViewSingleProps & RefAttributes<SVGSVGElement>>;

export default PageViewSingle;
export { PageViewSingle };
