import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagBarsStringRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagBarsStringRound: ForwardRefExoticComponent<TagBarsStringRoundProps & RefAttributes<SVGSVGElement>>;

export default TagBarsStringRound;
export { TagBarsStringRound };
