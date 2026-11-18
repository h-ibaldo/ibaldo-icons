import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoJoined: ForwardRefExoticComponent<VideoJoinedProps & RefAttributes<SVGSVGElement>>;

export default VideoJoined;
export { VideoJoined };
