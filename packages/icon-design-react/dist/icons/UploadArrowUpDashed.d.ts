import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowUpDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowUpDashed: ForwardRefExoticComponent<UploadArrowUpDashedProps & RefAttributes<SVGSVGElement>>;

export default UploadArrowUpDashed;
export { UploadArrowUpDashed };
