import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagDotsCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagDotsCircleRound: ForwardRefExoticComponent<TagDotsCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TagDotsCircleRound;
export { TagDotsCircleRound };
