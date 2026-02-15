import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunBrightness1CProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunBrightness1C: ForwardRefExoticComponent<SunBrightness1CProps & RefAttributes<SVGSVGElement>>;

export default SunBrightness1C;
export { SunBrightness1C };
