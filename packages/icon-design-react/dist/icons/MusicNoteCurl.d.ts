import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicNoteCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MusicNoteCurl: ForwardRefExoticComponent<MusicNoteCurlProps & RefAttributes<SVGSVGElement>>;

export default MusicNoteCurl;
export { MusicNoteCurl };
