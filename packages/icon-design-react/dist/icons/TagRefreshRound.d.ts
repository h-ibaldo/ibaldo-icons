import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagRefreshRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagRefreshRound: ForwardRefExoticComponent<TagRefreshRoundProps & RefAttributes<SVGSVGElement>>;

export default TagRefreshRound;
export { TagRefreshRound };
