import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileJoinedDotsCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileJoinedDotsCut: ForwardRefExoticComponent<FileJoinedDotsCutProps & RefAttributes<SVGSVGElement>>;

export default FileJoinedDotsCut;
export { FileJoinedDotsCut };
