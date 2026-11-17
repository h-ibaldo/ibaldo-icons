import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BackspaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Backspace: ForwardRefExoticComponent<BackspaceProps & RefAttributes<SVGSVGElement>>;

export default Backspace;
export { Backspace };
