import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePaperclipHorizontalPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePaperclipHorizontalPlain: ForwardRefExoticComponent<FilePaperclipHorizontalPlainProps & RefAttributes<SVGSVGElement>>;

export default FilePaperclipHorizontalPlain;
export { FilePaperclipHorizontalPlain };
