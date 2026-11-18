import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagDividerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagDivider: ForwardRefExoticComponent<TagDividerProps & RefAttributes<SVGSVGElement>>;

export default TagDivider;
export { TagDivider };
