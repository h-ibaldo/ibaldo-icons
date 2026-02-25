import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropFile2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropFile2: ForwardRefExoticComponent<DragAndDropFile2Props & RefAttributes<SVGSVGElement>>;

export default DragAndDropFile2;
export { DragAndDropFile2 };
