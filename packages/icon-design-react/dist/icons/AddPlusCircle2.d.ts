import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlusCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlusCircle2: ForwardRefExoticComponent<AddPlusCircle2Props & RefAttributes<SVGSVGElement>>;

export default AddPlusCircle2;
export { AddPlusCircle2 };
