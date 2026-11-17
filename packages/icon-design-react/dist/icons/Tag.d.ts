import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag: ForwardRefExoticComponent<TagProps & RefAttributes<SVGSVGElement>>;

export default Tag;
export { Tag };
