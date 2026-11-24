import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenshotCameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenshotCamera: ForwardRefExoticComponent<ScreenshotCameraProps & RefAttributes<SVGSVGElement>>;

export default ScreenshotCamera;
export { ScreenshotCamera };
