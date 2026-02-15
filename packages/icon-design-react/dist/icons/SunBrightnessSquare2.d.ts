import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightnessSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightnessSquare2: ForwardRefExoticComponent<SunBrightnessSquare2Props & RefAttributes<SVGSVGElement>>;

export default SunBrightnessSquare2;
export { SunBrightnessSquare2 };
