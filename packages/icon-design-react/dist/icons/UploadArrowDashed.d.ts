import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowDashed: ForwardRefExoticComponent<UploadArrowDashedProps & RefAttributes<SVGSVGElement>>;

export default UploadArrowDashed;
export { UploadArrowDashed };
