import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewMultipleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewMultiple: ForwardRefExoticComponent<PageViewMultipleProps & RefAttributes<SVGSVGElement>>;

export default PageViewMultiple;
export { PageViewMultiple };
