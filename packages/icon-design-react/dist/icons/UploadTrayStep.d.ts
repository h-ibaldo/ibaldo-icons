import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadTrayStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadTrayStep: ForwardRefExoticComponent<UploadTrayStepProps & RefAttributes<SVGSVGElement>>;

export default UploadTrayStep;
export { UploadTrayStep };
