import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileXCircleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileXCircleCut: ForwardRefExoticComponent<FileXCircleCutProps & RefAttributes<SVGSVGElement>>;

export default FileXCircleCut;
export { FileXCircleCut };
