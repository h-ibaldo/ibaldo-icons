import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadSquareStackCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadSquareStackCorner: ForwardRefExoticComponent<UploadSquareStackCornerProps & RefAttributes<SVGSVGElement>>;

export default UploadSquareStackCorner;
export { UploadSquareStackCorner };
