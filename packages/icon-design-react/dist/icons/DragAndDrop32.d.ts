import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDrop32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDrop32: ForwardRefExoticComponent<DragAndDrop32Props & RefAttributes<SVGSVGElement>>;

export default DragAndDrop32;
export { DragAndDrop32 };
