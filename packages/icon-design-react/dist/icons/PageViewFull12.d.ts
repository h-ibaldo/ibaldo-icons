import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewFull12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewFull12: ForwardRefExoticComponent<PageViewFull12Props & RefAttributes<SVGSVGElement>>;

export default PageViewFull12;
export { PageViewFull12 };
