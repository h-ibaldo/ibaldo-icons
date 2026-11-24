import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoCircleSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoCircleSmall: ForwardRefExoticComponent<VideoCircleSmallProps & RefAttributes<SVGSVGElement>>;

export default VideoCircleSmall;
export { VideoCircleSmall };
