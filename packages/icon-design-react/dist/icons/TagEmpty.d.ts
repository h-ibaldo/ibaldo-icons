import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagEmptyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagEmpty: ForwardRefExoticComponent<TagEmptyProps & RefAttributes<SVGSVGElement>>;

export default TagEmpty;
export { TagEmpty };
