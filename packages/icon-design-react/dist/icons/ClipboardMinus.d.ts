import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardMinus: ForwardRefExoticComponent<ClipboardMinusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardMinus;
export { ClipboardMinus };
