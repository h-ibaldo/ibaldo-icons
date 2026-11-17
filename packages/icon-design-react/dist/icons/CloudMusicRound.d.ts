import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMusicRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMusicRound: ForwardRefExoticComponent<CloudMusicRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudMusicRound;
export { CloudMusicRound };
