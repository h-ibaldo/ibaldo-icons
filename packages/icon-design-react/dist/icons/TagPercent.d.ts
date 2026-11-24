import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPercent: ForwardRefExoticComponent<TagPercentProps & RefAttributes<SVGSVGElement>>;

export default TagPercent;
export { TagPercent };
