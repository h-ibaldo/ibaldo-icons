import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DragFileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DragFile: ForwardRefExoticComponent<DragFileProps & RefAttributes<SVGSVGElement>>;

export default DragFile;
export { DragFile };
