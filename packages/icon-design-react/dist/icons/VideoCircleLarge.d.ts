import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoCircleLarge: ForwardRefExoticComponent<VideoCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoCircleLarge;
export { VideoCircleLarge };
