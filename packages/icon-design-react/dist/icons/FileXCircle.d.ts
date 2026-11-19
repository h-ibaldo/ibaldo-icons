import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCircle: ForwardRefExoticComponent<FileXCircleProps & RefAttributes<SVGSVGElement>>;

export default FileXCircle;
export { FileXCircle };
