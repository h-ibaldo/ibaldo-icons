import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreensharingArrowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreensharingArrows: ForwardRefExoticComponent<ScreensharingArrowsProps & RefAttributes<SVGSVGElement>>;

export default ScreensharingArrows;
export { ScreensharingArrows };
