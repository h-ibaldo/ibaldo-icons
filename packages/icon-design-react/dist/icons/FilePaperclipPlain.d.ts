import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePaperclipPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePaperclipPlain: ForwardRefExoticComponent<FilePaperclipPlainProps & RefAttributes<SVGSVGElement>>;

export default FilePaperclipPlain;
export { FilePaperclipPlain };
