import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileVideoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileVideo: ForwardRefExoticComponent<FileVideoProps & RefAttributes<SVGSVGElement>>;

export default FileVideo;
export { FileVideo };
