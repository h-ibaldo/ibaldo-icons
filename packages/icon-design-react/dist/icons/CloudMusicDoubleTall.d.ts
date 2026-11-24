import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicDoubleTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusicDoubleTall: ForwardRefExoticComponent<CloudMusicDoubleTallProps & RefAttributes<SVGSVGElement>>;

export default CloudMusicDoubleTall;
export { CloudMusicDoubleTall };
