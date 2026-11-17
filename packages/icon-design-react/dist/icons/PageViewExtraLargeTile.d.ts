import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PageViewExtraLargeTileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PageViewExtraLargeTile: ForwardRefExoticComponent<PageViewExtraLargeTileProps & RefAttributes<SVGSVGElement>>;

export default PageViewExtraLargeTile;
export { PageViewExtraLargeTile };
