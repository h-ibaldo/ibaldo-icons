import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotDashed2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotDashed2: ForwardRefExoticComponent<ScreenshotDashed2Props & RefAttributes<SVGSVGElement>>;

export default ScreenshotDashed2;
export { ScreenshotDashed2 };
