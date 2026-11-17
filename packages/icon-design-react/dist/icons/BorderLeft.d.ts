import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderLeft: ForwardRefExoticComponent<BorderLeftProps & RefAttributes<SVGSVGElement>>;

export default BorderLeft;
export { BorderLeft };
