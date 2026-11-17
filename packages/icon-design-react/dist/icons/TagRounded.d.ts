import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagRounded: ForwardRefExoticComponent<TagRoundedProps & RefAttributes<SVGSVGElement>>;

export default TagRounded;
export { TagRounded };
