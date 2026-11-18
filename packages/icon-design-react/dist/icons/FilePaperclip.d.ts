import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePaperclip: ForwardRefExoticComponent<FilePaperclipProps & RefAttributes<SVGSVGElement>>;

export default FilePaperclip;
export { FilePaperclip };
