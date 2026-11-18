import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoSquare: ForwardRefExoticComponent<VideoSquareProps & RefAttributes<SVGSVGElement>>;

export default VideoSquare;
export { VideoSquare };
