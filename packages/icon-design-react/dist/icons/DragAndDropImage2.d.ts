import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropImage2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropImage2: ForwardRefExoticComponent<DragAndDropImage2Props & RefAttributes<SVGSVGElement>>;

export default DragAndDropImage2;
export { DragAndDropImage2 };
