import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagClockRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagClockRound: ForwardRefExoticComponent<TagClockRoundProps & RefAttributes<SVGSVGElement>>;

export default TagClockRound;
export { TagClockRound };
