import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPercentRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPercentRound: ForwardRefExoticComponent<TagPercentRoundProps & RefAttributes<SVGSVGElement>>;

export default TagPercentRound;
export { TagPercentRound };
