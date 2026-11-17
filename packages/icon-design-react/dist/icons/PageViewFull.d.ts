import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewFullProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewFull: ForwardRefExoticComponent<PageViewFullProps & RefAttributes<SVGSVGElement>>;

export default PageViewFull;
export { PageViewFull };
