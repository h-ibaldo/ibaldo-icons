import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagOffSquareTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagOffSquareTilted: ForwardRefExoticComponent<TagOffSquareTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagOffSquareTilted;
export { TagOffSquareTilted };
