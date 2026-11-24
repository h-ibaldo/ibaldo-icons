import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusicDouble: ForwardRefExoticComponent<CloudMusicDoubleProps & RefAttributes<SVGSVGElement>>;

export default CloudMusicDouble;
export { CloudMusicDouble };
