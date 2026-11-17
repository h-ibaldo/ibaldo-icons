import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewContentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewContent: ForwardRefExoticComponent<PageViewContentProps & RefAttributes<SVGSVGElement>>;

export default PageViewContent;
export { PageViewContent };
