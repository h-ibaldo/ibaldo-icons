import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteCurlSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteCurlSmall: ForwardRefExoticComponent<MusicNoteCurlSmallProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteCurlSmall;
export { MusicNoteCurlSmall };
