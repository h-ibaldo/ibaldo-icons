import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusWide: ForwardRefExoticComponent<PaperclipMinusWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusWide;
export { PaperclipMinusWide };
