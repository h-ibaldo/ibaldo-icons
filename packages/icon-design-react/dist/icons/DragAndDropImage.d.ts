import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragAndDropImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragAndDropImage: ForwardRefExoticComponent<DragAndDropImageProps & RefAttributes<SVGSVGElement>>;

export default DragAndDropImage;
export { DragAndDropImage };
