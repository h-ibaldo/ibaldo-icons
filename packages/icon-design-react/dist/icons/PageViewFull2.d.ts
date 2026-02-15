import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewFull2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewFull2: ForwardRefExoticComponent<PageViewFull2Props & RefAttributes<SVGSVGElement>>;

export default PageViewFull2;
export { PageViewFull2 };
