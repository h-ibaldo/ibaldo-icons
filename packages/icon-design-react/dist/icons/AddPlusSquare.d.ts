import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlusSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlusSquare: ForwardRefExoticComponent<AddPlusSquareProps & RefAttributes<SVGSVGElement>>;

export default AddPlusSquare;
export { AddPlusSquare };
