import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePaperclipHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePaperclipHorizontal: ForwardRefExoticComponent<FilePaperclipHorizontalProps & RefAttributes<SVGSVGElement>>;

export default FilePaperclipHorizontal;
export { FilePaperclipHorizontal };
