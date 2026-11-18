import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailPaperclipTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailPaperclipTilted: ForwardRefExoticComponent<MailPaperclipTiltedProps & RefAttributes<SVGSVGElement>>;

export default MailPaperclipTilted;
export { MailPaperclipTilted };
