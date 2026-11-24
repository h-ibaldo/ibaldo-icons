import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShare: ForwardRefExoticComponent<ScreenShareProps & RefAttributes<SVGSVGElement>>;

export default ScreenShare;
export { ScreenShare };
