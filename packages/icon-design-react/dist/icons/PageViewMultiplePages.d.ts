import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewMultiplePagesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewMultiplePages: ForwardRefExoticComponent<PageViewMultiplePagesProps & RefAttributes<SVGSVGElement>>;

export default PageViewMultiplePages;
export { PageViewMultiplePages };
