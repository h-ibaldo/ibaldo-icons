import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewContinuousModeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewContinuousMode: ForwardRefExoticComponent<PageViewContinuousModeProps & RefAttributes<SVGSVGElement>>;

export default PageViewContinuousMode;
export { PageViewContinuousMode };
