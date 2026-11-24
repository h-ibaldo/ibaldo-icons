import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagMinusCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagMinusCircleRound: ForwardRefExoticComponent<TagMinusCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TagMinusCircleRound;
export { TagMinusCircleRound };
