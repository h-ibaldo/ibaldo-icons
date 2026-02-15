import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddPlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddPlus2: ForwardRefExoticComponent<AddPlus2Props & RefAttributes<SVGSVGElement>>;

export default AddPlus2;
export { AddPlus2 };
