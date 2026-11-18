import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagBars: ForwardRefExoticComponent<TagBarsProps & RefAttributes<SVGSVGElement>>;

export default TagBars;
export { TagBars };
