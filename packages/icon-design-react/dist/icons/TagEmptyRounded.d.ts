import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagEmptyRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagEmptyRounded: ForwardRefExoticComponent<TagEmptyRoundedProps & RefAttributes<SVGSVGElement>>;

export default TagEmptyRounded;
export { TagEmptyRounded };
