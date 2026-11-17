import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagOffTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagOffTilted: ForwardRefExoticComponent<TagOffTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagOffTilted;
export { TagOffTilted };
