import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewFull1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewFull1: ForwardRefExoticComponent<PageViewFull1Props & RefAttributes<SVGSVGElement>>;

export default PageViewFull1;
export { PageViewFull1 };
