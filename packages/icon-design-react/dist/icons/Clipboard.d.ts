import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Clipboard: ForwardRefExoticComponent<ClipboardProps & RefAttributes<SVGSVGElement>>;

export default Clipboard;
export { Clipboard };
