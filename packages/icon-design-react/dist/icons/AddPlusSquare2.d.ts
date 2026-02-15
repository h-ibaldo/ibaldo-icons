import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlusSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlusSquare2: ForwardRefExoticComponent<AddPlusSquare2Props & RefAttributes<SVGSVGElement>>;

export default AddPlusSquare2;
export { AddPlusSquare2 };
