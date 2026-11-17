import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersBoxy: ForwardRefExoticComponent<ChatLettersBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersBoxy;
export { ChatLettersBoxy };
