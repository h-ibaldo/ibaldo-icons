import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadSquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadSquareDashed: ForwardRefExoticComponent<UploadSquareDashedProps & RefAttributes<SVGSVGElement>>;

export default UploadSquareDashed;
export { UploadSquareDashed };
