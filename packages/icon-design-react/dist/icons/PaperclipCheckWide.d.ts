import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckWide: ForwardRefExoticComponent<PaperclipCheckWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckWide;
export { PaperclipCheckWide };
