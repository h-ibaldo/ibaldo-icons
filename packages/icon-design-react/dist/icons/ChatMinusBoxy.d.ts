import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatMinusBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatMinusBoxy: ForwardRefExoticComponent<ChatMinusBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatMinusBoxy;
export { ChatMinusBoxy };
