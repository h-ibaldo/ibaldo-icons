import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music: ForwardRefExoticComponent<MusicProps & RefAttributes<SVGSVGElement>>;

export default Music;
export { Music };
