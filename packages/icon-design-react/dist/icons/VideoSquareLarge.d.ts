import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoSquareLarge: ForwardRefExoticComponent<VideoSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default VideoSquareLarge;
export { VideoSquareLarge };
