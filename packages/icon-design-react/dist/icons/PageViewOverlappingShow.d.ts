import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewOverlappingShowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewOverlappingShow: ForwardRefExoticComponent<PageViewOverlappingShowProps & RefAttributes<SVGSVGElement>>;

export default PageViewOverlappingShow;
export { PageViewOverlappingShow };
