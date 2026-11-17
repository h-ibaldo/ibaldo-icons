import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagRefreshTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagRefreshTilted: ForwardRefExoticComponent<TagRefreshTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagRefreshTilted;
export { TagRefreshTilted };
