import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagStackSquareTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagStackSquareTilted: ForwardRefExoticComponent<TagStackSquareTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagStackSquareTilted;
export { TagStackSquareTilted };
