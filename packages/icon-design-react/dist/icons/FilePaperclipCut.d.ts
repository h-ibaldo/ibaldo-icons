import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePaperclipCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePaperclipCut: ForwardRefExoticComponent<FilePaperclipCutProps & RefAttributes<SVGSVGElement>>;

export default FilePaperclipCut;
export { FilePaperclipCut };
