import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoLarge: ForwardRefExoticComponent<VideoLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoLarge;
export { VideoLarge };
