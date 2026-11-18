import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLettersSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLettersSlant: ForwardRefExoticComponent<ChatLettersSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatLettersSlant;
export { ChatLettersSlant };
