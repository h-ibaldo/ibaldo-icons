import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagDollarTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagDollarTilted: ForwardRefExoticComponent<TagDollarTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagDollarTilted;
export { TagDollarTilted };
