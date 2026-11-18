import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagOffRound: ForwardRefExoticComponent<TagOffRoundProps & RefAttributes<SVGSVGElement>>;

export default TagOffRound;
export { TagOffRound };
