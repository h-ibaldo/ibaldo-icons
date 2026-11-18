import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagCheckTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagCheckTilted: ForwardRefExoticComponent<TagCheckTiltedProps & RefAttributes<SVGSVGElement>>;

export default TagCheckTilted;
export { TagCheckTilted };
