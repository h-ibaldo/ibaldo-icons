import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoSquareDot: ForwardRefExoticComponent<VideoSquareDotProps & RefAttributes<SVGSVGElement>>;

export default VideoSquareDot;
export { VideoSquareDot };
