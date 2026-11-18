import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXWide: ForwardRefExoticComponent<PaperclipXWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXWide;
export { PaperclipXWide };
