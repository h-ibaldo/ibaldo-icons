import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewContent1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewContent1: ForwardRefExoticComponent<PageViewContent1Props & RefAttributes<SVGSVGElement>>;

export default PageViewContent1;
export { PageViewContent1 };
