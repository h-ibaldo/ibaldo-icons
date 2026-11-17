import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3CloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Close: ForwardRefExoticComponent<Bookmark3CloseProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Close;
export { Bookmark3Close };
