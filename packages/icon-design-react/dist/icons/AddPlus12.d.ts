import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlus12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlus12: ForwardRefExoticComponent<AddPlus12Props & RefAttributes<SVGSVGElement>>;

export default AddPlus12;
export { AddPlus12 };
