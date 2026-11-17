import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagXCircleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagXCircleRound: ForwardRefExoticComponent<TagXCircleRoundProps & RefAttributes<SVGSVGElement>>;

export default TagXCircleRound;
export { TagXCircleRound };
