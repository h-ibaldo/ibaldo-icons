import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddFontAProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddFontA: ForwardRefExoticComponent<AddFontAProps & RefAttributes<SVGSVGElement>>;

export default AddFontA;
export { AddFontA };
