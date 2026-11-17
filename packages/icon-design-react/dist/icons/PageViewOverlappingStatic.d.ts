import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewOverlappingStaticProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewOverlappingStatic: ForwardRefExoticComponent<PageViewOverlappingStaticProps & RefAttributes<SVGSVGElement>>;

export default PageViewOverlappingStatic;
export { PageViewOverlappingStatic };
