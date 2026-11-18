import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoReelsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoReels: ForwardRefExoticComponent<VideoReelsProps & RefAttributes<SVGSVGElement>>;

export default VideoReels;
export { VideoReels };
