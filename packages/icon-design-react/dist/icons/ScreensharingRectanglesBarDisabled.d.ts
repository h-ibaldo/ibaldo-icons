import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingRectanglesBarDisabledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingRectanglesBarDisabled: ForwardRefExoticComponent<ScreensharingRectanglesBarDisabledProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingRectanglesBarDisabled;
export { ScreensharingRectanglesBarDisabled };
