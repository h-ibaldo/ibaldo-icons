import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusic: ForwardRefExoticComponent<CloudMusicProps & RefAttributes<SVGSVGElement>>;

export default CloudMusic;
export { CloudMusic };
