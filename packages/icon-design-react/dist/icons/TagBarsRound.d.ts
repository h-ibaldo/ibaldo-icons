import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagBarsRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagBarsRound: ForwardRefExoticComponent<TagBarsRoundProps & RefAttributes<SVGSVGElement>>;

export default TagBarsRound;
export { TagBarsRound };
