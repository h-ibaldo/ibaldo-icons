import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowSquare: ForwardRefExoticComponent<UploadArrowSquareProps & RefAttributes<SVGSVGElement>>;

export default UploadArrowSquare;
export { UploadArrowSquare };
