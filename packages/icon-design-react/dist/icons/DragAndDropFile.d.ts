import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropFile: ForwardRefExoticComponent<DragAndDropFileProps & RefAttributes<SVGSVGElement>>;

export default DragAndDropFile;
export { DragAndDropFile };
