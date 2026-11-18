import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagRound: ForwardRefExoticComponent<TagRoundProps & RefAttributes<SVGSVGElement>>;

export default TagRound;
export { TagRound };
