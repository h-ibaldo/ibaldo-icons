import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadSquareOpen: ForwardRefExoticComponent<UploadSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default UploadSquareOpen;
export { UploadSquareOpen };
