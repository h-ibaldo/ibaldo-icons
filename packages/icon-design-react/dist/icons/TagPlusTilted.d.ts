import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPlusTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPlusTilted: ForwardRefExoticComponent<TagPlusTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagPlusTilted;
export { TagPlusTilted };
