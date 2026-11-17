import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagCheckCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagCheckCircleRound: ForwardRefExoticComponent<TagCheckCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TagCheckCircleRound;
export { TagCheckCircleRound };
