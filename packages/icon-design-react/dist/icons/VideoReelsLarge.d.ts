import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoReelsLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoReelsLarge: ForwardRefExoticComponent<VideoReelsLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoReelsLarge;
export { VideoReelsLarge };
