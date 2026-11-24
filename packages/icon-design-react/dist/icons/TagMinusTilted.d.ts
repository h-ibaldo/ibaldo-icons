import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagMinusTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagMinusTilted: ForwardRefExoticComponent<TagMinusTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagMinusTilted;
export { TagMinusTilted };
