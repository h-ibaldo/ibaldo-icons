import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotCamera2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotCamera2: ForwardRefExoticComponent<ScreenshotCamera2Props & RefAttributes<SVGSVGElement>>;

export default ScreenshotCamera2;
export { ScreenshotCamera2 };
