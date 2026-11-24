import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoOffJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoOffJoined: ForwardRefExoticComponent<VideoOffJoinedProps & RefAttributes<SVGSVGElement>>;

export default VideoOffJoined;
export { VideoOffJoined };
