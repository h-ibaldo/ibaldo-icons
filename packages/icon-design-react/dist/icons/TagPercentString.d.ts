import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPercentStringProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPercentString: ForwardRefExoticComponent<TagPercentStringProps & RefAttributes<SVGSVGElement>>;

export default TagPercentString;
export { TagPercentString };
