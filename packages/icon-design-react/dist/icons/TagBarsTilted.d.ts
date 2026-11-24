import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagBarsTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagBarsTilted: ForwardRefExoticComponent<TagBarsTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagBarsTilted;
export { TagBarsTilted };
