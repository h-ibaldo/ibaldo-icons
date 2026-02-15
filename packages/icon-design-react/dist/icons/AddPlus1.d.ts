import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlus1: ForwardRefExoticComponent<AddPlus1Props & RefAttributes<SVGSVGElement>>;

export default AddPlus1;
export { AddPlus1 };
