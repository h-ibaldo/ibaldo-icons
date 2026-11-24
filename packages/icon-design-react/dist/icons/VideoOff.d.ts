import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoOff: ForwardRefExoticComponent<VideoOffProps & RefAttributes<SVGSVGElement>>;

export default VideoOff;
export { VideoOff };
