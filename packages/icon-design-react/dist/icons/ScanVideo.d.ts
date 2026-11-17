import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanVideoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanVideo: ForwardRefExoticComponent<ScanVideoProps & RefAttributes<SVGSVGElement>>;

export default ScanVideo;
export { ScanVideo };
