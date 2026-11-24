import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagPlusCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagPlusCircleRound: ForwardRefExoticComponent<TagPlusCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TagPlusCircleRound;
export { TagPlusCircleRound };
