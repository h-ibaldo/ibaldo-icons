import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UpvoteLikeDislikeHandsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UpvoteLikeDislikeHands: ForwardRefExoticComponent<UpvoteLikeDislikeHandsProps & RefAttributes<SVGSVGElement>>;

export default UpvoteLikeDislikeHands;
export { UpvoteLikeDislikeHands };
