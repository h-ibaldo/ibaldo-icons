import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipWide: ForwardRefExoticComponent<PaperclipWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipWide;
export { PaperclipWide };
