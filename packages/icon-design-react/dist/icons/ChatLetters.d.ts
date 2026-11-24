import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLetters: ForwardRefExoticComponent<ChatLettersProps & RefAttributes<SVGSVGElement>>;

export default ChatLetters;
export { ChatLetters };
