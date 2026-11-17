import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotCameraPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotCameraPlus: ForwardRefExoticComponent<ScreenshotCameraPlusProps & RefAttributes<SVGSVGElement>>;

export default ScreenshotCameraPlus;
export { ScreenshotCameraPlus };
