import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagStackOffsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagStackOffset: ForwardRefExoticComponent<TagStackOffsetProps & RefAttributes<SVGSVGElement>>;

export default TagStackOffset;
export { TagStackOffset };
