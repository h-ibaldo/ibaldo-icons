import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragDropImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragDropImage: ForwardRefExoticComponent<DragDropImageProps & RefAttributes<SVGSVGElement>>;

export default DragDropImage;
export { DragDropImage };
