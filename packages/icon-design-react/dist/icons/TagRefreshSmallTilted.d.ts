import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagRefreshSmallTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagRefreshSmallTilted: ForwardRefExoticComponent<TagRefreshSmallTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagRefreshSmallTilted;
export { TagRefreshSmallTilted };
