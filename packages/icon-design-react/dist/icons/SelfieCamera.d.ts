import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieCameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SelfieCamera: ForwardRefExoticComponent<SelfieCameraProps & RefAttributes<SVGSVGElement>>;

export default SelfieCamera;
export { SelfieCamera };
