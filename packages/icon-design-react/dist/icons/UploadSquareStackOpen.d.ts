import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadSquareStackOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadSquareStackOpen: ForwardRefExoticComponent<UploadSquareStackOpenProps & RefAttributes<SVGSVGElement>>;

export default UploadSquareStackOpen;
export { UploadSquareStackOpen };
