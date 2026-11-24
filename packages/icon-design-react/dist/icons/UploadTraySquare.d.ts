import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadTraySquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadTraySquare: ForwardRefExoticComponent<UploadTraySquareProps & RefAttributes<SVGSVGElement>>;

export default UploadTraySquare;
export { UploadTraySquare };
