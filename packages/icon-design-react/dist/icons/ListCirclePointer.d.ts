import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCirclePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCirclePointer: ForwardRefExoticComponent<ListCirclePointerProps & RefAttributes<SVGSVGElement>>;

export default ListCirclePointer;
export { ListCirclePointer };
