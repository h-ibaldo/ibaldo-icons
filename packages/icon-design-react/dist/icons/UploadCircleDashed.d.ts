import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadCircleDashed: ForwardRefExoticComponent<UploadCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default UploadCircleDashed;
export { UploadCircleDashed };
