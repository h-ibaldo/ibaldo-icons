import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewContinuousProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewContinuous: ForwardRefExoticComponent<PageViewContinuousProps & RefAttributes<SVGSVGElement>>;

export default PageViewContinuous;
export { PageViewContinuous };
