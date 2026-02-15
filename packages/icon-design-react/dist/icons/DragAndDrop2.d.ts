import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDrop2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDrop2: ForwardRefExoticComponent<DragAndDrop2Props & RefAttributes<SVGSVGElement>>;

export default DragAndDrop2;
export { DragAndDrop2 };
