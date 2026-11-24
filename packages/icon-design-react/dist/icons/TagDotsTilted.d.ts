import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagDotsTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagDotsTilted: ForwardRefExoticComponent<TagDotsTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagDotsTilted;
export { TagDotsTilted };
