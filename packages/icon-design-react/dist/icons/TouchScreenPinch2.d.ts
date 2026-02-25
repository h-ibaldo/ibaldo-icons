import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenPinch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenPinch2: ForwardRefExoticComponent<TouchScreenPinch2Props & RefAttributes<SVGSVGElement>>;

export default TouchScreenPinch2;
export { TouchScreenPinch2 };
