import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VideoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Video: ForwardRefExoticComponent<VideoProps & RefAttributes<SVGSVGElement>>;

export default Video;
export { Video };
