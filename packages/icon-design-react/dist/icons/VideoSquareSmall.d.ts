import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoSquareSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoSquareSmall: ForwardRefExoticComponent<VideoSquareSmallProps & RefAttributes<SVGSVGElement>>;

export default VideoSquareSmall;
export { VideoSquareSmall };
