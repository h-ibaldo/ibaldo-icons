import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotAreaPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotAreaPlus: ForwardRefExoticComponent<ScreenshotAreaPlusProps & RefAttributes<SVGSVGElement>>;

export default ScreenshotAreaPlus;
export { ScreenshotAreaPlus };
