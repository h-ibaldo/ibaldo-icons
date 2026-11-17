import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiamondMotionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiamondMotion: ForwardRefExoticComponent<DiamondMotionProps & RefAttributes<SVGSVGElement>>;

export default DiamondMotion;
export { DiamondMotion };
