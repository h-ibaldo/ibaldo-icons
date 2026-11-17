import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropFile: ForwardRefExoticComponent<DragDropFileProps & RefAttributes<SVGSVGElement>>;

export default DragDropFile;
export { DragDropFile };
