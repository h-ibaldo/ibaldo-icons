import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlusCircle: ForwardRefExoticComponent<AddPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default AddPlusCircle;
export { AddPlusCircle };
