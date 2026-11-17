import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotDashed: ForwardRefExoticComponent<ScreenshotDashedProps & RefAttributes<SVGSVGElement>>;

export default ScreenshotDashed;
export { ScreenshotDashed };
