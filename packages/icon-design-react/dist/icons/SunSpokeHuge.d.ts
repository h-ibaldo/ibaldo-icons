import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunSpokeHugeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunSpokeHuge: ForwardRefExoticComponent<SunSpokeHugeProps & RefAttributes<SVGSVGElement>>;

export default SunSpokeHuge;
export { SunSpokeHuge };
