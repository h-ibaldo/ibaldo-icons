import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicDoubleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusicDoubleRound: ForwardRefExoticComponent<CloudMusicDoubleRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudMusicDoubleRound;
export { CloudMusicDoubleRound };
