import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagStringRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagStringRound: ForwardRefExoticComponent<TagStringRoundProps & RefAttributes<SVGSVGElement>>;

export default TagStringRound;
export { TagStringRound };
