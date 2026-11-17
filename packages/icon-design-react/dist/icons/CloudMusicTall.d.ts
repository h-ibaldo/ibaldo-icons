import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusicTall: ForwardRefExoticComponent<CloudMusicTallProps & RefAttributes<SVGSVGElement>>;

export default CloudMusicTall;
export { CloudMusicTall };
