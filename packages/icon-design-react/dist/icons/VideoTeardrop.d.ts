import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoTeardropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VideoTeardrop: ForwardRefExoticComponent<VideoTeardropProps & RefAttributes<SVGSVGElement>>;

export default VideoTeardrop;
export { VideoTeardrop };
