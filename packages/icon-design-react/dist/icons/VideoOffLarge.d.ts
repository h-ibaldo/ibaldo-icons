import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoOffLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoOffLarge: ForwardRefExoticComponent<VideoOffLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoOffLarge;
export { VideoOffLarge };
