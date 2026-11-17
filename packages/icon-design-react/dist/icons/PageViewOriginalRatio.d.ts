import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewOriginalRatioProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewOriginalRatio: ForwardRefExoticComponent<PageViewOriginalRatioProps & RefAttributes<SVGSVGElement>>;

export default PageViewOriginalRatio;
export { PageViewOriginalRatio };
