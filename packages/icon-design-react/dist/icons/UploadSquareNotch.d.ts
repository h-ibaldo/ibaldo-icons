import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadSquareNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadSquareNotch: ForwardRefExoticComponent<UploadSquareNotchProps & RefAttributes<SVGSVGElement>>;

export default UploadSquareNotch;
export { UploadSquareNotch };
