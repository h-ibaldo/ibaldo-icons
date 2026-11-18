import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoCircle: ForwardRefExoticComponent<VideoCircleProps & RefAttributes<SVGSVGElement>>;

export default VideoCircle;
export { VideoCircle };
