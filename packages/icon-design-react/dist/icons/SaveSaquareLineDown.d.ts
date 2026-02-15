import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSaquareLineDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSaquareLineDown: ForwardRefExoticComponent<SaveSaquareLineDownProps & RefAttributes<SVGSVGElement>>;

export default SaveSaquareLineDown;
export { SaveSaquareLineDown };
