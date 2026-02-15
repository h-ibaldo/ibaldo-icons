import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddFontAPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddFontAPlus: ForwardRefExoticComponent<AddFontAPlusProps & RefAttributes<SVGSVGElement>>;

export default AddFontAPlus;
export { AddFontAPlus };
