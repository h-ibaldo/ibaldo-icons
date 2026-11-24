import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareThin: ForwardRefExoticComponent<PaperclipSquareThinProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareThin;
export { PaperclipSquareThin };
