import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPercentStringRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPercentStringRound: ForwardRefExoticComponent<TagPercentStringRoundProps & RefAttributes<SVGSVGElement>>;

export default TagPercentStringRound;
export { TagPercentStringRound };
