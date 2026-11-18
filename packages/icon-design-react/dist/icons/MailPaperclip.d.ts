import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailPaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailPaperclip: ForwardRefExoticComponent<MailPaperclipProps & RefAttributes<SVGSVGElement>>;

export default MailPaperclip;
export { MailPaperclip };
