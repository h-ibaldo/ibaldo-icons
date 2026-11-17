import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewFullscreenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewFullscreen: ForwardRefExoticComponent<PageViewFullscreenProps & RefAttributes<SVGSVGElement>>;

export default PageViewFullscreen;
export { PageViewFullscreen };
